import React, {useState} from "react";
import classes from "./ContactUsForm.module.css"
import {updateObject, checkValidity} from "../../utility"
import Input from "../UI/Input/Input";
import {useDispatch,useSelector} from "react-redux";
import Button from "../UI/Button/Button"
import * as actions from "../../store/actions/contactAction";
import {sendContact} from "../../store/actions/contactAction";
const ContactUsForm = (props) => {
    const dispatch = useDispatch();
    const formState = useSelector((state)=>state.contactSate)
    const [show, setShow] = React.useState(0);
    const [step, setStep] = useState(1);
    const nextStep = () => {
        setStep((current) => current + 1)
    }

    const prvStep = () => {
        setStep((current) => current - 1)
    }
    const initialForm = [
        {
            inputs: {
                customer_type: {
                    elementType: 'radio',
                    label: "I'm a",
                    elementConfig: {
                        options: [
                            {value: "agent", displayValue: "Tour Agent"},
                            {value: "leader", displayValue: "Tour Leader"},
                            {value: "individual", displayValue: "Individual Traveler"},
                            {value: "other", displayValue: "Other"},
                        ]
                    },
                    validation: {
                        required: true
                    },
                    isValid: false,
                    touched: false,
                    value: ""

                },
                traveled: {
                    elementType: 'radio',
                    label: "Have you ever traveled with us before?",
                    elementConfig: {
                        options: [
                            {value: "yes", displayValue: "Yes"},
                            {value: "no", displayValue: "No"},
                        ]

                    },
                    validation: {
                        required: true

                    },
                    isValid: false,
                    touched: false,
                    value: ""
                },
            },
            title: "Contact Form",
            description: "Some details so we can easily get in touch with you and connect you to the right agent or Sar-El representative.",
            isFormValid: false,
            btns: [
                {
                    title: "Next",
                    type: "fill",
                    color: "primary",
                    clicked: () => {
                        nextStep()
                    },
                },
            ]
        },
        {
            inputs: {
                full_name: {
                    elementType: 'input',
                    label: "Your Full Name",
                    noLabel: true,
                    elementConfig: {},
                    validation: {
                        required: true
                    },
                    isValid: false,
                    touched: false,
                    value: ""

                },
                organization_name: {
                    elementType: 'input',
                    label: "Organization Name",
                    noLabel: true,
                    elementConfig: {},
                    validation: {
                        required: true
                    },
                    isValid: false,
                    touched: false,
                    value: ""

                },
                email: {
                    elementType: 'input',
                    label: "Your Email",
                    noLabel: true,
                    elementConfig: {},
                    validation: {
                        required: true
                    },
                    isValid: false,
                    touched: false,
                    value: ""

                },
                Country_Of_Residence: {
                    elementType: 'input',
                    label: "Country Of Residence",
                    noLabel: true,
                    elementConfig: {},
                    validation: {
                        required: true
                    },
                    isValid: false,
                    touched: false,
                    value: ""

                },
                country_code: {
                    noLabel: true,
                    withoutLabel: true,
                    elementType: 'select',
                    style: {
                        width: "50%",
                        flexDirection: "column",
                        display: "flex",
                        alignItems: "flex-end",
                        paddingRight: "10px"
                    },
                    elementConfig: {
                        options: [{value: 970, displayValue: 970}, {value: 971, displayValue: 971}, {
                            value: 972,
                            displayValue: 972
                        }, {value: 973, displayValue: 973}, {value: 974, displayValue: 974},],
                    },
                    validation: {
                        required: true,
                    },
                    isValid: false,
                    touched: false,
                    value: 970,
                    forLogin: false,
                    label: "Country Code",
                    validationErr: "",
                    margin_b: "15px",
                    width: "half"
                },
                mobile: {
                    elementType: 'input',
                    label: "Mobile Number",
                    style: {width: "50%", flexDirection: "column", display: "flex", alignItems: "flex-end"},
                    noLabel: true,
                    elementConfig: {},
                    validation: {
                        required: true
                    },
                    isValid: false,
                    touched: false,
                    value: ""

                },

            },
            title: "Contact Details",
            description: "",
            isFormValid: false,
            btns: [
                {
                    title: "Send",
                    type: "fill",
                    color: "primary",
                    clicked: null,
                },
                {
                    title: "Back",
                    type: "stroke",
                    color: "primary",
                    clicked: () => prvStep()
                }
            ]
        },

    ]
    const [form, setForm] = useState(initialForm);
    const sendRequest=()=>{
        const formsInputsValues={};
        form.map((_row)=>{
            Object.keys(_row.inputs).map((_el)=>{
                if(_el==="mobile"){
                    formsInputsValues[_el]=_row.inputs["country_code"].value+_row.inputs[_el].value
                }else{
                    formsInputsValues[_el]=_row.inputs[_el].value
                }

            })
        });
        dispatch(actions.sendContact(formsInputsValues));
    }

    const onChangedHandler = (event, element) => {
        // console.log(element);
        // console.log(event.target.value);

        const updatedElement = updateObject(form[step - 1].inputs[element], {
            value: event.target.value,
            isValid: checkValidity(event.target.value, form[step - 1].inputs[element].validation),
            touched: true
        });

        let updatedFormElements = updateObject(form[step - 1].inputs, {[element]: updatedElement});
        let formValid = true;
        for (let formElement in updatedFormElements) {
            formValid = formValid && updatedFormElements[formElement].isValid;
        }
        const updatedForm = updateObject(form[step - 1], {inputs: updatedFormElements, isFormValid: formValid})
        let formArr = [...form];
        formArr[step - 1] = updatedForm;
        setForm(formArr);
        console.log(formArr);
    };
    const formArr = [];
    Object.keys(form[step - 1].inputs).map(_el => {
        formArr.push({id: _el, config: form[step - 1].inputs[_el]})
    })
    let htmlForm = (
        <div className={classes.wrapper}>
            <div className={classes.form_header}>
                <h4 className={classes.form_header_title}>{form[step - 1].title}</h4>
                <div className={classes.form_header_desc}>{form[step - 1].description}</div>
            </div>
            <form className={classes.form_wrapper}>
                {

                    formArr.map(el => {
                        return (
                            <Input key={el.id} changed={(event) => onChangedHandler(event, el.id)}
                                   elementConfig={el.config.elementConfig} elementType={el.config.elementType}
                                   valid={el.config.isValid}
                                   shouldValidate={el.config.validation}
                                   touched={el.config.touched}
                                   noLabel={el.config.noLabel}
                                   style={el.config.style}
                                   name={el.id}
                                   label={el.config.label}
                                   value={el.config.value}
                            />
                        )
                    })
                }
                <div className={classes.footer}>
                    <div className={classes.btns2}>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            dispatch(actions.hide())
                        }} title="cancel" type="stroke" color="primary" isButton={true}/>
                    </div>
                    <div className={classes.btns1}>
                        {form[step - 1].btns.map((_item) => (
                            <Button onClick={(e) => {
                                e.preventDefault();
                                _item.clicked? _item.clicked(): sendRequest();
                            }} title={_item.title} type={_item.type} color={_item.color} isButton={true}/>
                        ))}
                    </div>

                </div>
            </form>
        </div>
    );
    if(formState.success){


        htmlForm= <div className={classes.wrapper}>
            <div className={classes.form_header}>
                <h4 className={classes.form_header_title}>    your Message Sent Successfully!</h4>
            </div>

                <div className={classes.footer} style={{marginTop:"15px",justifyContent:"center"}}>
                    <div className={classes.btns1}>
                        <Button onClick={(e) => {
                            e.preventDefault();
                            dispatch(actions.hide())
                        }} title="cancel" type="stroke" color="primary" isButton={true}/>
                    </div>

                </div>

        </div>


    }


    return (
        htmlForm
    )

}

export default ContactUsForm;
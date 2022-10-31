import React from "react";
import classes from "./Input.module.css"
import TextField from '@mui/material/TextField';

const Input = (props) => {
    const InputElementClasses = [classes.InputElement];
    if (!props.valid&&props.shouldValidate&&props.touched) {
        InputElementClasses.push(classes.Invalid);
    }
    let inputElement = null;
    switch (props.elementType) {
        case "input":
            inputElement =
                <TextField value={props.value} onChange={props.changed} {...props.elementConfig}
                           className={InputElementClasses.join(" ")} id="outlined-basic" label={props.label}
                           variant="outlined"/>
            break;
        case "textarea":
            inputElement = <textarea className={InputElementClasses.join(" ")} onChange={props.changed}  {...props.elementConfig}
                                     value={props.value}/>;
            break;
        case "select":
            inputElement = <select className={InputElementClasses.join(" ")} onChange={props.changed}  {...props.elementConfig} >
                {props.elementConfig.options.map(opt => <option key={opt.value}
                                                                value={opt.value}>{opt.displayValue}</option>)}
            </select>;
            break;
            case "radio":
            inputElement = <div className={InputElementClasses.join(" ")} >

                <div>
                    {props.elementConfig.options.map(opt =><div className={classes.radio_wrapper}>
                        <input type="radio"  className={InputElementClasses.join(" ")}  onChange={props.changed}
                               value={opt.value} name={props.name} checked={opt.value===props.value} />
                        <label> {opt.displayValue}</label>

                    </div>)}
                </div>

            </div>;
            break;
        default:
            inputElement = <input className={InputElementClasses.join(" ")}  onChange={props.changed}  {...props.elementConfig}
                                  value={props.value}/>;
            break;
    }

    return (
        <div style={props.style}>
            {!props.noLabel ?<label className={classes.label} htmlFor="">{props.label}</label>:null}
            {inputElement}
        </div>

    );


};

export default Input;
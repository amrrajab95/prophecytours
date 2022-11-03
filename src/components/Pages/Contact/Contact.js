import React from "react";
import classes from "./Contact.module.css"
import Page from "../../Page/Page";
import ContactItems from "./ContactItems/ContactItems";
import Map from "./Map/Map"
import {useSelector, useDispatch} from "react-redux";
import Button from "../../UI/Button/Button";
import * as contactActions from "../../../store/actions/contactAction"
import * as actions from "../../../store/actions/contactAction";

const Contact = (props) => {
    const dispatch = useDispatch();

    return (
        <div>
            <Page page_title="Let's talk" sub_title="Contact">
                <ContactItems/>
                {/*<Map/>*/}
                <div className={classes.btn_wrapper}>
                    <Button title="Contact Us" type="fill" color="primary" isButton={true}
                            onClick={() => dispatch(contactActions.show())}/>
                </div>
            </Page>
        </div>
    )

}

export default Contact;
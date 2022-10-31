import React from "react";
import classes from "./ContactUs.module.css"
import Button from "../UI/Button/Button";

const ContactUs = (props) => {
    let _btns = null;
    if (props.data.btns.length) {
        _btns = props.data.btns.map((_item) => (
                <Button onClick={_item.clicked} title={_item.title} path={_item.path} type={_item.type}
                        color={_item.color}/>
            )
        )
    }

    return (
        <div className={classes.wrapper}>
            <div className="container">
                <div className={classes.title}>
                    {props.data.title}
                </div>
                <div className={classes.description}>
                    {props.data.description}
                </div>
                {_btns ? <div className="btns">
                    {_btns}
                </div> : null}
            </div>
        </div>
    )


}

export default ContactUs;
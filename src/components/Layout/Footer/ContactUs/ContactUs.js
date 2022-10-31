import React from "react";
import classes from "./ContactUs.module.css"

const contactUs = (props) => {

    let _jsx = props.data.map((_item) => (
        <li>
            {_item.label? <span>
                {_item.label}
            </span>:null}
            <span>
                     {_item.value}
            </span>
        </li>
    ))
    return (
        <React.Fragment>
            <div className={classes.title}>
                {props.title}
            </div>
            <ul className={classes.content}>
                {_jsx}
            </ul>
        </React.Fragment>

    )


}

export default contactUs;
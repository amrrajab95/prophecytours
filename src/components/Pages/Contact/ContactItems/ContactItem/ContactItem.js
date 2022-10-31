import React from "react";
import classes from "./ContactItem.module.css"
import parse from 'html-react-parser';

const ContactItem =(props)=>{

    return(
        <div className={classes.wrapper}>
            <div className={classes.title_wrapper}>
                <props.icon style={{color:"#998543"}}/>
                <span>
                {props.title}
            </span>
            </div>
            <div className={classes.content}>
                {parse(props.content)}
            </div>
        </div>

    )

}

export default ContactItem;


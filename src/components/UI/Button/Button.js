import React from "react";
import classes from "./Button.module.css"
import {NavLink} from "react-router-dom";

const button = (props) => {

    const classesArr=[classes[props.type],classes[props.color],classes.btn]
    const classesStr=classesArr.join(" ");

    return(
        <div className={classesStr}>
                {props.isButton?<button onClick={props.clicked} {...props}> {props.title}</button>:
                <NavLink {...props} to={props.path}>
                    {props.title}
                </NavLink>
            }
        </div>
        )


}

export default button;
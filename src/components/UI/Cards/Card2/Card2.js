import React from "react";
import classes from "./Card2.module.css"

const card2 =(props)=>(
    <div className={classes.wrapper}>
        <div className={classes.img}>
            <img src={props.img} alt={props.title}/>
        </div>
        <div className={classes.content}>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.description}>
                {props.description}
            </div>
        </div>

    </div>
)

export default card2;
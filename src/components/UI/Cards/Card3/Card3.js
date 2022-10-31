import React from "react";
import classes from "./Card3.module.css"

const card3 =(props)=>(
    <div className={classes.wrapper}>
        <div className={classes.img}>
            <img src={props.img} alt={props.title}/>
        </div>
        <div className={classes.footer}>
            <div className={classes.title}>
                {props.title}
            </div>
            <div className={classes.f}>
                {props.destination}
            </div>
            <div className={classes.f}>
                {props.date}
            </div>
        </div>

    </div>
)

export default card3;
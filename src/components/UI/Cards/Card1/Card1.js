import React from "react";
import classes from "./Card1.module.css"
import {NavLink} from "react-router-dom";

const card1 =(props)=>(

        <div className={classes.wrapper}>
            <NavLink to="/tours/1">
                <div className={classes.img}>
                    <img src={props.img} alt={props.title}/>
                </div>
                <div className={classes.title}>
                    {props.title}
                </div>
            </NavLink>

        </div>

)

export default card1;
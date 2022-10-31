import React from "react";
import classes from "./BookLet.module.css"
import Button from "../UI/Button/Button.js";

const bookLet =(props)=>{

    return(
        <div className={classes.wrapper}>
            <div className="container">
                <div className={classes.content}>
                    <div className={classes.title}>
                        {props.data.title}
                    </div>
                    <div className={classes.description}>
                        {props.data.description}
                    </div>
                    <div className={classes.input}>
                        <div className={classes.input_wrapper}>
                            <input type="text" placeholder="Your Email"/>
                        </div>

                        <Button title="Subscribe" isButton={true} type="fill" color="primary"/>

                    </div>
                </div>
                <div className={classes.img}>
                    <img src={props.data.image} alt={props.title}/>
                </div>
            </div>

        </div>
    )

}

export default bookLet;
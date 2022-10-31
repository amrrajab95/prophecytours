import React from "react";
import classes from "./Newsletter.module.css"
import Button from "../UI/Button/Button.js";

const newsletter =(props)=>{

    return(
        <div className={classes.wrapper}>
            <div className="container">
                <div className={classes.title}>
                    SUBSCRIBE TO RECEIVE EXCLUSIVE UPDATES FROM ISRAEL!
                </div>
                <div className={classes.form}>
                    <div className={classes.inputs}>
                           <div className={classes.input_wrapper}>
                               <input type="text" placeholder="Your Name"/>
                           </div>
                        <div className={classes.input_wrapper}>
                            <input type="text" placeholder="Your Email"/>
                        </div>

                    </div>

                    <div className={classes.btn_wrapper}>
                        <Button title="Subscribe" isButton={true} type="fill" color="secondary" style={{color:"var(--main-color-2)"}}/>

                    </div>
                </div>

            </div>

        </div>
    )

}

export default newsletter;
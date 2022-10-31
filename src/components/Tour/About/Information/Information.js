import React from "react";
import classes from "./Information.module.css"
import Button from "../../../UI/Button/Button";
const Information =(props)=>{


    return(
        <div className={classes.wrapper}>
                <div className={classes.title}>
                    INFORMATION ABOUT YOUR TRIP
                </div>
            <div className={classes.content}>
                    <ul>
                        <li>
                            Capital: Paris
                        </li>
                        <li>
                            Language: French
                        </li>
                        <li>
                            Population: 63 million
                        </li>
                        <li>
                            Time Zone: EST plus 6 hours
                        </li>
                        <li>
                            Currency: Euro (EUR)
                        </li>
                        <li>
                            Electricity: 220V. 50Hz
                        </li>
                    </ul>
                <div className={classes.btn_wrapper}>
                    <Button title="INFORMATION" isButton={true} type="fill" color="primary"/>
                </div>

            </div>
        </div>
    )
}


export default Information;


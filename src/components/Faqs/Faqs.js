import React from "react";
import classes from "./Faqs.module.css"
import Inclusion from "../Tour/Inclusion/Inclusion";
import Itinerary from "../Tour/Itinerary/Itinerary";
const Faqs=(props)=>{

    return(
        <div className={classes.wrapper}>
            <div className="container">
                <div className="page_title">
                    Your life-changing journey of Israel begins here.
                </div>
                <div className={classes.desc}>
                    Serving churches and Christian ministries from around the world with the finest travel agents. If you are a tour agent, tour leader, pastors, or a visitor looking for a trusted partner in Israel. Please contact us today for more information on how we can serve you.
                </div>

                <Itinerary/>
            </div>
        </div>

    )


}

export default Faqs
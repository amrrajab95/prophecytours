import React from "react";
import classes from "./Contact.module.css";
import Button from "../UI/Button/Button";


const Contact =(props)=>{
        const data={
            title:"Your life-changing journey of Israel begins here.\n",
            content:"Serving churches and Christian ministries from around the world with the finest travel agents. If you are a tour agent, tour leader, pastors, or a visitor looking for a trusted partner in Israel. Please contact us today for more information on how we can serve you."
        }
    return(

        <div className={classes.wrapper}>
            <div className="container">
                <div className={classes.title}>
                    {data.title}
                </div>
                <div className={classes.content}>
                    {data.content}
                </div>
                <div className={classes.btn_wrapper}>
                    <Button title="Contact Us"  type="fill" color="primary" isButton={true}/>
                </div>
            </div>


        </div>

    )

}


export default Contact;

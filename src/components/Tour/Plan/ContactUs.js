import React from "react";
import classes from "./ContactUs.module.css"
import Button from "../../UI/Button/Button";

const contactUs = (props) => {
    let _btns =null;
    if(props.data.btns.length){
        _btns=props.data.btns.map((_item)=>(
                <Button title={_item.title} path={_item.path} type={_item.type} color={_item.color} />
            )

        )
    }

    return(
        <div className={classes.wrapper} id="sec_5">
            <div className="container">
                <div className="page_title">
                    PLAN A TRIP
                </div>
                <div className={classes.title}>
                    {props.data.title}
                </div>
                <div className={classes.description}>
                    {props.data.description}
                </div>
                {_btns?<div className="btns">
                    {_btns}
                </div>:null}
            </div>

        </div>
    )


}

export default contactUs;
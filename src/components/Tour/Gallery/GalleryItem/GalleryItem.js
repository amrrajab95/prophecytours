import React from "react";
import classes from "./GalerryItem.module.css"
import dayImg from "../../../../media/images/day_i.png"


const GalleryItem =(props)=>{

    return(
            <div className={classes.wrapper} onClick={props.onOpen}>
                <div className={classes.label}>
                DAY
                </div>
                <div className={classes.label_day}>
                    {props.day}
                </div>
                <div className={classes.title}>
                    {props.title}
                </div>
            </div>

    )

}

export default GalleryItem;
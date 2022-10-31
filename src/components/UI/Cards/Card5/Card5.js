import React from "react";
import cover_img from "../../../../media/images/image_cover.png"
import img1 from "../../../../media/images/f1.png"
import classes from "./Card2.module.css"

const card5 = (props) => (
    <div className={classes.wrapper}>
        <div className={classes.img}>
            <div>
                <img src={cover_img} alt={props.title}/>
            </div>
            <div className={classes.top_image}>
                <img src={img1} alt={props.title}/>
            </div>
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

export default card5;
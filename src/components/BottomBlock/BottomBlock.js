import React from "react";
import classes from "./BottomBlock.module.css"

const bottomBlock =(props)=>(
    <div className={classes.wrapper} style={{backgroundImage:`url(${props.data.image})`}}>
        <div className={classes.title}>
            {props.data.title}
        </div>
    </div>
)

export default  bottomBlock;
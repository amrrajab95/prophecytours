import React from "react";
import classes from "./BlockHeader.module.css"

const blockHeader =(props)=>(
    <React.Fragment>
        <div className={classes.header_img}>
            <img src={props.image} alt=""/>
        </div>
        <div className={classes.title}>
            {props.title}
        </div>
        {props.description? <div className={classes.description}>
            {props.description}
        </div>:null}

    </React.Fragment>
)

export default blockHeader;



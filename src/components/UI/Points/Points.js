import React from "react";
import classes from "./Points.module.css"

const Points =(props)=>{
    const jsxItems=props.items.map((_item)=>(
        <div className={classes.item}>
            <img src={_item.image} alt={_item.title}/>
            <div className={classes.title}>
                {_item.title}
            </div>
        </div>
    ))
    return(
        <div className={classes.wrapper}>
            <div className={classes.inner_wrapper}>
                <div className={classes.wrap_title}>
                    {props.title}
                </div>
                <div className={classes.content}>
                    {jsxItems}
                </div>
            </div>

        </div>
    )
}

export default Points;
import React from "react";
import classes from "./Tabs1.module.css"
import {NavLink} from "react-router-dom";

const Tabs1 =(props)=>{


    return(
        <div className={classes.wrapper}>
            <div className="container">
                <ul>
                    {props.items.map((_item)=><li>
                        <a href={'#'+_item.id}>
                            {_item.title}
                        </a>
                    </li>)}
                </ul>

            </div>


        </div>
    )
}

export default Tabs1;
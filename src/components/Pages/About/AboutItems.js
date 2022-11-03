import React from "react";
import classes from  "./About.module.css"
import parse from "html-react-parser";
const AboutItems =({items})=>{

    const _jsx_items=items.map((_item)=>{
        return(
            <div className={classes.item_wrapper}>
                <div className="container">
                    <div className={classes.item_title}>
                        {_item.title}
                    </div>
                    <div className={classes.content}>
                        {parse(_item.content)}
                    </div>
                </div>

            </div>
        )
    })

    return(

        <div className={classes.wrapper}>
            {_jsx_items}
        </div>
    )

}

export default AboutItems;
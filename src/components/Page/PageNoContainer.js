import React from "react"
import classes from "./Page.module.css"

const Page = (props) => {


    return (
        <div className={classes.page}>
            <div className={classes.page_header}>
                <div className={classes.title_wrapper}>
                    <div className={classes.page_title}>
                        {props.page_title}
                    </div>
                    <div className={classes.sub_title}>
                        {props.sub_title}
                    </div>
                </div>

            </div>
            <div className={classes.page_content}>
                {props.children}
            </div>
        </div>

    )

}

export default Page;
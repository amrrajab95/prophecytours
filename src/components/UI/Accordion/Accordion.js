import React from "react";
import classes from "./Accordion.module.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Accordion = (props) => {
    const classesArr=[classes.content];
    if(props.active){
        classesArr.push(classes.active)
    }
    return (
            <div className={classes.wrapper}>
            <div className={classes.title_wrapper} onClick={props.onClickHandler}>
                <KeyboardArrowDownIcon  style={{color: "#998543"}}/>
                <div className={classes.title}>
                    {props.title}
                </div>
            </div>
                <div className={classesArr.join(" ")}>
                {props.content}
            </div>
        </div>
    )

}

export default Accordion;
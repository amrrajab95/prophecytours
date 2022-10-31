import React from "react";
import classes from "./Logo.module.css"
import logoImg from "../../../media/images/logo.png"
const logo = (props) => {

    return (
       <div className={classes.logo}>
           <img src={logoImg} alt="Prophecy Tours"/>
       </div>
    )


}

export default logo;
import React from "react";
import classes from "./Header.module.css"
import Logo from "../../UI/Logo/Logo"
import NavItems from "../NavItems/NavItems"
import {NavLink} from "react-router-dom";

const header = (props) => {

    return (
        <header className={classes.default}>
            <div className="container">
                <NavLink to="/">
                    <Logo/>
                </NavLink>
                <NavItems/>
            </div>
        </header>
    )


}

export default header;
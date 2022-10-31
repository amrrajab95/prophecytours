import React from "react";
import {NavLink} from "react-router-dom"
import classes from "./NavItem.module.css"
const navItem =(props)=>(
    <NavLink to={props.path} activeClassName="nav_active">
        {props.title}
    </NavLink>
)
export default navItem;
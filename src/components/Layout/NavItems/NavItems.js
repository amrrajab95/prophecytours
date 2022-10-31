import React from "react";
import NavItem from "../NavItems/NavItem/NavItem"
import classes from "./NavItems.module.css"

const navItems = (props) => {
    const _navs =[
        {title:"Home",link:"/"},
        {title:"About Us",link:"about-us"},
        {title:"Services",link:"/services"},
        {title:"FAQs",link:"/faqs"},
        {title:"Contact Us",link:"/contact-us"},
    ]

   const _navs_jsx= _navs.map((item)=>
       <li>
           <NavItem title={item.title} path={item.link}/>
       </li>

    )

    return (
        <ul className={`${classes.wrapper} nav_links`}>
            {_navs_jsx}
        </ul>
    )

}

export default navItems;
import React from "react";
import classes from "./Layout.module.css"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"

const Layout = (props) => {

    return (
        <React.Fragment>
            <Header/>
            {props.children}
            <Footer/>
        </React.Fragment>
    )

}


export default Layout;
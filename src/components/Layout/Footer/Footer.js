import React from "react";
import classes from "./Footer.module.css"
import logoImg from "../../../media/images/logo.png"
import Social from "./Social/Social"
import ContactUs from "./ContactUs/ContactUs"
import Newsletter from "../../Newsletter/Newsletter";
import parse from "html-react-parser";
import {useSelector} from "react-redux";

const Footer = (props) => {
    const addressData =useSelector((state)=>state.contactSate.contactAddress)

    return (
        <React.Fragment>
            <Newsletter />
            <footer className={classes.default}>
                <div className="container">
                    <div className={classes.content}>
                        <img className={classes.logo} src={logoImg} alt=""/>
                        <ContactUs title="Contact Us" data={[
                            {label: "Email: ", value: addressData.length ?parse(addressData[0].content):""},
                            {label: "Tel: ", value:addressData.length ?parse(addressData[1].content):"" },

                        ]}/>
                        <div className={classes.addr}>
                            <div className={classes.addr_title}>
                            Postal Address
                            </div>
                            <div>
                                {addressData.length?parse(addressData[4].content):""}
                            </div>
                        </div>
                        <Social/>
                    </div>
                </div>
            </footer>
        </React.Fragment>

    )


}

export default Footer;
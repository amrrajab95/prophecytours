import React from "react";
import classes from "./Footer.module.css"
import logoImg from "../../../media/images/logo.png"
import Social from "./Social/Social"
import ContactUs from "./ContactUs/ContactUs"
import Newsletter from "../../Newsletter/Newsletter";
const footer = (props) => {

    return (
        <React.Fragment>
            <Newsletter />
            <footer className={classes.default}>
                <div className="container">
                    <div className={classes.content}>
                        <img className={classes.logo} src={logoImg} alt=""/>
                        <ContactUs title="Contact Us" data={[
                            {label: "Email: ", value: "contact@lastoria.com"},
                            {label: "Tel: ", value: "+972 (2) 533-8000"},

                        ]}/>
                        <ContactUs title="Postal Address" data={[
                            { value: "8 HaHoshen st."},
                            { value: "Mevasseret Zion"},
                            { value: "9079560, Israel"},

                        ]}/>
                        <Social/>
                    </div>
                </div>
            </footer>
        </React.Fragment>

    )


}

export default footer;
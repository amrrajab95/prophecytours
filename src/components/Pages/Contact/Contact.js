import React from "react";
import classes from "./Contact.module.css"
import Page from "../../Page/Page";
import ContactItems from "./ContactItems/ContactItems";
import Map from "./Map/Map"

const Contact = (props) => {


    return (

        <div>
            <Page page_title="Let's talk" sub_title="Contact">
                <ContactItems/>

                <Map/>

            </Page>
        </div>
    )

}

export default Contact;
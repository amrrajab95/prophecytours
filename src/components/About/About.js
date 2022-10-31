import React from "react";
import classes from "./About.module.css"
import AboutItems from "./AboutItems";
import Page from "../Page/PageNoContainer";
import Button from "../UI/Button/Button";
import Contact from "./Contact";
const About = (props) => {

    const data = [{title: "We are your trusted partner in Israel.", content: "You deserve the richest time in Israel possible, rooted in biblical truths. We're your partner, with 27 years of experience, more than 1,000,000 satisfied guests, and local Israeli believers guiding you. We have you fully covered. We work closely with the Israeli Ministry of Tourism, the Israeli Union of Hotels, and own an internal fleet of buses. You won't have to worry about the local bureaucracies, logistics, or details."},
        {title: "Tour Agents", content: ""},
        {title:"Tour Leaders",content:"We believe that our shared Biblical values give us the heart that lets you feel welcomed, connected, protected, and able to receive all that God has for you on your experience in Israel. Many tour leaders have told us how much they wished they’d worked with us on their previous trips to Israel."},
        {title:"Individual Visitors",content:"There is no other place like Israel in the world! There is no place like the Dead Sea in the World! There is no other place like Jerusalem in the World! Please check out our stories page and don’t forget to Subscribe to get exclusive updates about travel tips for your next journey to Israel."}
    ]

    return (
        <Page page_title="About Us" sub_title="Get to know Prophecy, Our Story, Goals, and Values.">
            <div className={classes.wrapper} >
                <AboutItems items={data} />
            </div>
            <Contact/>
        </Page>
    )

}

export default About;
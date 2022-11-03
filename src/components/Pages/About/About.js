import React,{useEffect,useState} from "react";
import classes from "./About.module.css"
import AboutItems from "./AboutItems";
import Page from "../../Page/PageNoContainer";
import Button from "../../UI/Button/Button";
import baseAxios from "../../../baseAxios";
import Contact from "./Contact";
const About = (props) => {

    const [aboutItems,setAboutItems]=useState([]);

    useEffect(()=>{
        baseAxios.get("/about").then((res)=>{
            setAboutItems(res.data)
        })
    },[])



    return (
        <Page page_title="About Us" sub_title="Get to know Prophecy, Our Story, Goals, and Values.">
            <div className={classes.wrapper} >
                <AboutItems items={aboutItems} />
            </div>
            <Contact/>
        </Page>
    )

}

export default About;
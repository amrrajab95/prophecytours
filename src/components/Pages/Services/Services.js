import React from "react";
import classes from "./Services.module.css"
import Page from "../../Page/PageNoContainer";
import Card4 from "../../UI/Cards/Card4/Card4"
import img1 from "../../../media/images/f1.png"
import Contact from "../About/Contact";
const Services = (props) => {
    const data = [{
        title: "From Budget to Luxury Tours",
        content: "The treasures the land of Israel offers to vary as widely as the many types of guests we host.",
        img: img1
    },
        {
            title: "From Budget to Luxury Tours",
            content: "The treasures the land of Israel offers to vary as widely as the many types of guests we host.",
            img: img1
        },
        {
            title: "From Budget to Luxury Tours",
            content: "The treasures the land of Israel offers to vary as widely as the many types of guests we host.",
            img: img1
        },
        {
            title: "From Budget to Luxury Tours",
            content: "The treasures the land of Israel offers to vary as widely as the many types of guests we host.",
            img: img1
        },
        {
            title: "From Budget to Luxury Tours",
            content: "The treasures the land of Israel offers to vary as widely as the many types of guests we host.",
            img: img1
        },
        {
            title: "From Budget to Luxury Tours",
            content: "The treasures the land of Israel offers to vary as widely as the many types of guests we host.",
            img: img1
        },
        {
            title: "From Budget to Luxury Tours",
            content: "The treasures the land of Israel offers to vary as widely as the many types of guests we host.",
            img: img1
        },
    ]
    const jsx_data = data.map((_item) =><div className="col-3">
        <Card4 title={_item.title} description={_item.content} img={_item.img}/>
    </div>)
    return (
            <Page page_title="Our Services!" sub_title="Serving churches and Christian ministries around the world with the finest travel agents and tailored tours to Israel since 2022.">
                <div className="container">
                    <div className={classes.wrapper}>
                        <div className={classes.page_title}>
                            Ways we can serve you.
                        </div>
                        <div className={classes.page_description}>
                            Serving churches and Christian ministries around the world with the finest travel agents and
                            tailored tours to Israel since 2022.
                        </div>
                        <div className={`${classes.page_content} row`}>
                            {jsx_data}
                        </div>

                    </div>
                </div>

                <Contact/>
            </Page>

    )


}

export default Services;
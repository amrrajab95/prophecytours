import React from "react";
import classes from "./Tours.module.css"
import Card5 from "../../UI/Cards/Card5/Card5";
import flight from "../../../media/images/flight1.png"
import flight2 from "../../../media/images/flight2.png"
import Page from "../../Page/Page";

const Tours = (props) => {
    const data = {
        title: "DESTINATIONS TOURES",
        sub_title: "ISRAEL | ROME | GREECE | TURKEY | ENGLAND",
        desc_title: "DISCOVERING THE HERITAGE OF FAITH. LIVING THE ADVENTURE OF DISCOVERY.",
        desc_content: "It was Saint Augustine who wrote, “The World is a book, and those who do not travel read only a page.” At Inspired Travel we are completely convinced of this truth. We know all to well the profound impact our destinations have in the lives of those who make the journey. The shores of Capernaum off of the sea of Galilee, the Catacombs of Rome, the breath-taking library in the ancient city of Ephesus, all stir the soul as well as the imagination. And for the believer, they stir the joys and love of a deep and abiding faith in Jesus Christ.",
        items:[
            {title:"THE HOLY LAND, ISRAEL",content:"There are few places on earth that have the capacity to affect a life like Israel can. Nowhere else in the world is there such a unique collision between the ancient and the modern. Whether walking the streets of metropolitan Tel Aviv, or placing your hand in reflective prayer on the iconic Western Wall, the breath of culture and history represented in the land is absolutely staggering."},
            {title:"THE HOLY LAND, ISRAEL",content:"There are few places on earth that have the capacity to affect a life like Israel can. Nowhere else in the world is there such a unique collision between the ancient and the modern. Whether walking the streets of metropolitan Tel Aviv, or placing your hand in reflective prayer on the iconic Western Wall, the breath of culture and history represented in the land is absolutely staggering."},
            {title:"THE HOLY LAND, ISRAEL",content:"There are few places on earth that have the capacity to affect a life like Israel can. Nowhere else in the world is there such a unique collision between the ancient and the modern. Whether walking the streets of metropolitan Tel Aviv, or placing your hand in reflective prayer on the iconic Western Wall, the breath of culture and history represented in the land is absolutely staggering."},
            {title:"THE HOLY LAND, ISRAEL",content:"There are few places on earth that have the capacity to affect a life like Israel can. Nowhere else in the world is there such a unique collision between the ancient and the modern. Whether walking the streets of metropolitan Tel Aviv, or placing your hand in reflective prayer on the iconic Western Wall, the breath of culture and history represented in the land is absolutely staggering."},
            {title:"THE HOLY LAND, ISRAEL",content:"There are few places on earth that have the capacity to affect a life like Israel can. Nowhere else in the world is there such a unique collision between the ancient and the modern. Whether walking the streets of metropolitan Tel Aviv, or placing your hand in reflective prayer on the iconic Western Wall, the breath of culture and history represented in the land is absolutely staggering."},
            {title:"THE HOLY LAND, ISRAEL",content:"There are few places on earth that have the capacity to affect a life like Israel can. Nowhere else in the world is there such a unique collision between the ancient and the modern. Whether walking the streets of metropolitan Tel Aviv, or placing your hand in reflective prayer on the iconic Western Wall, the breath of culture and history represented in the land is absolutely staggering."},
        ]
    }
    const _jsx=data.items.map((_item)=>(
        <div className="col-2">
            <Card5 title={_item.title} description={_item.content} />
        </div>

    ))

    return(
        <Page page_title={data.title} sub_title={data.sub_title}>
            <div className={classes.h_wrapper}>
                <div className={classes.h_title}>
                    {data.desc_title}
                </div>
                <div className={classes.h_description}>
                    {data.desc_content}
                </div>
            </div>
            <div className={classes.p_border}>
                <div className={classes.p_border_img}>
                    <img width="80" src={flight} alt="flight"/>
                </div>
            </div>
            <div className={classes.wrapper}>
                <div className="row">
                    {_jsx}
                </div>
            </div>
            <div className={classes.p_border}>
                <div className={classes.p_border_img}>
                    <img  width="80" src={flight2} alt="flight"/>
                </div>
            </div>

        </Page>

    )
}

export default Tours;



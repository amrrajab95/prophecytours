import React from "react";
import classes from "./Tour.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import Button from "../UI/Button/Button";
import Tabs from "../UI/Tabs1/Tabs1";
import About from "./About/About";
import Itinerary from "./Itinerary/Itinerary";
import Inclusion from "./Inclusion/Inclusion";
import Gallery from "./Gallery/Gallery";
import Plan from "../Tour/Plan/ContactUs";
import Upcoming from "../Tour/Upcoming/Featured";
import flight from "../../media/images/fly.png";
import featured1 from "../../media/images/f1.png";
import featured2 from "../../media/images/f2.png";
import featured3 from "../../media/images/f3.png";


const tour = (props) => {
    const upcomingData = {
        title: "FEATURED DESTINATIONS TOURES",
        image: flight,
        description: "Passports must be valid after 6 months of return date. Personal articles Laundry, other beverages (wines, liquors, mineral water, tea, coffee, etc.) and food that are not on the menus of your included meal package, and any additional luggage.",
        items: [
            {
                title: "THE HOLY LAND, ISRAEL",
                destination: "Orlando",
                date: "Oct, 10-22, 2022",
                img: featured1
            },
            {
                title: "THE HOLY LAND, ISRAEL",
                destination: "Orlando",
                date: "Oct, 10-22, 2022",
                img: featured2
            },
            {
                title: "THE HOLY LAND, ISRAEL",
                destination: "Orlando",
                date: "Oct, 10-22, 2022",
                img: featured3
            }
        ],
        btns: [
            {
                title: "SEE MORE",
                path: "/tours",
                type: "fill",
                color: "primary",
            },
        ]

    }
    const planData = {
        title: "Although travel insurance is optional, it is highly recommended. Be prepared for unforeseen events that can leave you to cancel your trip, or worse, with out-of-pocket expenses! We have partnered with Trawick Insurance to offer you coverage for the unexpected. Buy it now upon registration to get cancel for any reason. There are 2 options for travel insurance:",
        description: "1- Buy directly online through our website after submitting the application\n" +
            "2- Buy insurance from your own insurance company.",
        btns: [
            {
                title: "LETS START PLANNING",
                path: "",
                type: "fill",
                color: "primary",
            },
            {
                title: "TALK TO AN EXPERT",
                path: "",
                type: "stroke",
                color: "primary",
            }
        ]

    }

    const tour = {
        header: {
            title: "11 DAYS PILGRIMAGE TO FRANCE",
            Destination: "France",
            Duration: "11 DAYS",
            Trip_Code: "NP - 401"
        }, sections: [
            {
                title: 'About Your Trip',
                id: "sec_1"
            },
            {
                title: 'ITINERARY',
                id: "sec_2"
            },
            {
                title: "WHAT’S INCLUDED\n" +
                    "AND WHAT’S NOT",
                id: "sec_3"
            }, {
                title: "GALLERY",
                id: "sec_4"
            },
            {
                title: "PLAN A TRIP",
                id: "sec_5"
            }
            , {
                title: "UPCOMING TRIPS",
                id: "sec_6"
            }
        ]
    }
    return (
        <div className={classes.page}>
            <div className={classes.page_header}>
                <div className="container">
                    <div className={classes.inner_wrapper}>
                        <div className={classes.page_header_content}>
                            <div className={classes.s_1}>
                                11 DAYS PILGRIMAGE TO FRANCE
                            </div>
                            <div className={classes.s_2}>
                                <div className={classes.s_2_tabs}>
                                    <div>
                               <span>
                           Destination
                       </span>
                                        <span>
                               FRANCE
                           </span>
                                    </div>
                                    <div>
                           <span>
                               Duration
                           </span>
                                        <span>
                               11 DAYS
                           </span>
                                    </div>
                                    <div>
                           <span>
                               Trip Code
                           </span>
                                        <span>
                               NP - 401
                           </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.h_btn_wrapper}>
                            <Button title="RESERVE ONLINE" isButton={true} type="fill" color="primary"/>
                        </div>
                    </div>
                </div>
            </div>
            <Tabs  items={tour.sections}/>
            <About/>
            <Itinerary title="ITINERARY"/>
            <Inclusion/>
            <Gallery/>
            <Plan data={planData}/>
            <Upcoming data={upcomingData}/>

        </div>

    )
}

export default tour;
import React from "react";
import classes from "./Inclusion.module.css"
import Points from "../../UI/Points/Points";
import image1 from "../../../media/images/i1.png"
import image2 from "../../../media/images/i2.png"
import image3 from "../../../media/images/i3.png"
import image4 from "../../../media/images/i4.png"
import xIcon from "../../../media/images/x_i.png"
import Button from "../../UI/Button/Button";
const Inclusion =(props)=>{

    const inclusionData=[
        {image:image1,title:"Round Trip Airfare."},
        {image:image1,title:"All airport taxes and Fuel SURCHARGES."},
        {image:image2,title:"First-class Hotels."},
        {image:image3,title:"Transfers as per itinerary."},
        {image:image4,title:"Breakfast and Dinner daily."},
        {image:image3,title:"Sightseeing and admissions fees as per itinerary."},
        {image:image1,title:"Daily Masses. (If requested)."},
        {image:image1,title:"Professional local guides."},
        {image:image1,title:"Prices Based on Double Occupancy."},
        {image:image1,title:"Tour Brochures: Special promotional brochures featuring the Pilgrimage printed for distribution by you."},
        {image:image1,title:"Travel Protection Plan for Everybody on Pilgrimage is provided for FREE."},
    ];

    const exclusionData=[
        {image:xIcon,title:"Round Trip Airfare."},
        {image:xIcon,title:"All airport taxes and Fuel SURCHARGES."},
        {image:xIcon,title:"First-class Hotels."},
        {image:xIcon,title:"Transfers as per itinerary."},
        {image:xIcon,title:"Breakfast and Dinner daily."},
        {image:xIcon,title:"Sightseeing and admissions fees as per itinerary."},
        {image:xIcon,title:"Daily Masses. (If requested)."},
        {image:xIcon,title:"Professional local guides."},
        {image:xIcon,title:"Prices Based on Double Occupancy."},
        {image:xIcon,title:"Tour Brochures: Special promotional brochures featuring the Pilgrimage printed for distribution by you."},
        {image:xIcon,title:"Travel Protection Plan for Everybody on Pilgrimage is provided for FREE."},
    ];

    return(
        <div className={classes.wrapper} id="sec_3" >
            <div className="container">
                <div className="page_title">
                    WHAT’S INCLUDED AND WHAT’S NOT
                </div>
                <div className={classes.s_1}>
                   <Points items={inclusionData} title="WHAT’S INCLUDED"/>
                   <Points items={exclusionData} title="WHAT’S NOT INCLUDED"/>
                </div>
                <div className={classes.s_2}>
                    <div>
                        <div className={classes.s_2_title}>
                            Travel Protection
                        </div>
                        <div className={classes.s_2_content}>
                            <p>
                                Although travel insurance is optional, it is highly recommended. Be prepared for unforeseen events that can leave you to cancel your trip, or worse, with out-of-pocket expenses! We have partnered with Trawick Insurance to offer you coverage for the unexpected. Buy it now upon registration to get cancel for any reason. There are 2 options for travel insurance:

                            </p>
                            <p>
                               <p>
                                   1- Buy directly online through our website after submitting the application
                               </p>
                                2- Buy insurance from your own insurance company.
                            </p>
                        </div>

                    </div>
                    <div>
                        <div className={classes.s_2_title}>
                            <p>
                                Book without worry!
                            </p>
                                <p>
                                    New terms & conditions!
                                </p>
                            <p>
                                Cancellation/Rescheduling

                            </p>

                        </div>
                        <div className={classes.s_2_content}>
                                <p>
                                    100% refund if pilgrimage gets canceled up to 100 days before the departure date
                                    Pilgrimages can be rescheduled with no fees if the Coronavirus Pandemic continues during the booked departure
                                </p>
                        </div>
                    </div>



                </div>
                <div className={classes.btn_wrapper}>
                    <Button title="TRAVEL INSURANCE" isButton={true} type="fill" color="primary" />

                </div>

            </div>
        </div>
    )
}

export default Inclusion;
import React from "react";
import Information from "./Information/Information";
import classes from "./About.module.css"


const About = (props) => {

    return (
        <div className={classes.wrapper} id="sec_1">
            <div className="container">
                <div className={classes.s_1}>
                    <div className="page_title">
                        ABOUT YOUR TRIP
                    </div>
                    <div className={classes.s_1_content}>
                        France represents one of our most popular tourist destinations. An inspiring pilgrimage highlighted by a visit to the Blessed Mother’s shrine at Lourdes
                        where the Virgin Mary appeared to a young shepherd girl… Nevers, where St.
                        Bernadette lived after the apparitions … Lisieux, home of St. Therese,
                        The Little Flower … the cathedral in Chartres with its impressive stained glass windows … magnificent Mont St.
                        Michel … the lovely chateaux of the Loire Valley … the Beaches of Normandy plus unforgettable Paris and the famous Notre Dame Cathedral.
                    </div>
                </div>
                <div className={classes.s_2}>
                    <Information/>
                </div>
            </div>

        </div>
    )

}


export default About;

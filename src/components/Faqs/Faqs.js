import React from "react";
import classes from "./Faqs.module.css"
import Inclusion from "../Tour/Inclusion/Inclusion";
import Itinerary from "../Tour/Itinerary/Itinerary";
const Faqs=(props)=>{
    let data=[
        {title:"What is the luggage I am allowed to bring? Weight? Size? And how many?",
            content:"1 carry-on bag total dimensions of 49.5 linear inches (length + width + height) with a\n" +
                "maximum weight of 18 lbs.;  1 personal item such as a purse or computer bag; 1 piece\n" +
                "of checked luggage with total dimensions of 62 linear inches (length + width + height),\n" +
                "and maximum weight of 50 lbs.",
            id:1
        },
        {title:"What is the money currency that is used in Europe and in Israel?",
            content:"Us dollars are widely accepted in Israel. Euro is the currency in all of Europe. You\n" +
                "should bring approximately $300.00 cash for lunches and small incidentals; $20.00 to\n" +
                "$50.00 in $1.00 denominations for water. Credit cards such as master Card and visa are\n" +
                "welcomed at all stores. Please make sure that you call your credit card company and\n" +
                "alert them that you will be traveling to these countries so that they will not be alarmed by\n" +
                "the charges.",
            id:2
        },
        {title:"What is the dress code?",
            content:"Casual throughout the tour. No shorts or sleeveless shirts are allowed in any Churches.\n" +
                "Pants, capris, and jeans are okay to wear. Please dress respectfully.",
            id:3
        },
        {title:"What about the electricity and water?",
            content:"It is 220 v, so you will need a current adapter from 110 to 220, as well as plug adapters\n" +
                "(2 round prongs) for your tour. All hotels on this tour have hair dryers in the rooms. As\n" +
                "for the water, it is safe to drink water from the tap, however we highly recommend\n" +
                "bottled water.",
            id:4
        },
        {title:"Do I need a visa?",
            content:"If you do not hold a USA passport, please contact the embassy of the country you are\n" +
                "visiting for visa requirements.",
            id:5
        },
        {title:"Do I need insurance?",
            content:"We highly recommend purchasing insurance, however it is not required. Trawick\n" +
                "international is a company that we have worked with for several years. Please review\n" +
                "their website carefully for explanations on coverage and exclusions. All questions\n" +
                "relating to insurance should be directed to the insurance company you can visit their\n" +
                "website athttps://www.trawickinternational.com/?agent=9902 . All payments should be\n" +
                "made directly to the insurance company. Do not send insurance payments to Prophecy\n" +
                "Tours. Although we endorse Trawick international, you are more than welcomed to\n" +
                "compare with other agencies.",
            id:6
        },
        {title:"What if I don’t have a roommate?",
            content:"If you are traveling alone and request a roommate; near departure, we will match up\n" +
                "participants who are also in need of a roommate. If we do not have a roommate for you,\n" +
                "\n" +
                "you will be placed in a “forced single room”- which means you will have a single room at\n" +
                "half the cost of the full single rate.",
            id:7
        },
        {title:"What if I need my medications and vitamins on the plane?",
            content:'<div class="Accordion_wrapper__Q2zaV" style="box-sizing: border-box; margin-bottom: 15px;">\n' +
                '<div class="Accordion_content__Nd8o- Accordion_active__DsniO" style="box-sizing: border-box; padding: 15px; background-color: var(--background-color); border-radius: 15px; margin-top: 7px;">\n' +
                '<p>Passengers are allowed to bring medications in pill or other solid form through security<br />\n' +
                'screening checkpoints in unlimited amounts, as long as they are screened. TSA does<br />\n' +
                'not require passengers to have medications in prescription bottles, but states have<br />\n' +
                'individual laws regarding the labeling of prescription medication with which passengers<br />\n' +
                'need to comply.</p>\n' +
                '\n' +
                '<p>Passengers should inform officers of medications and separate them from other<br />\n' +
                'belongings before screening begins. Medication is usually screened by x-ray; however,<br />\n' +
                'if a passenger does not want a medication x-rayed, he or she may ask for an inspection<br />\n' +
                'instead. This request must be made before screening begins</p>\n' +
                '\n' +
                '<p>The passenger will be responsible for displaying, handling, and repacking the<br />\n' +
                'medication if an inspection is requested. If the medication cannot be cleared visually, it<br />\n' +
                'will need to be x-rayed and may be subject to additional screening, including explosive<br />\n' +
                'trace detection screening.</p>\n' +
                '\n' +
                '<p>If you have medications and injection needles in your carry-on luggage, it&rsquo;s advisable to<br />\n' +
                'have a doctor&rsquo;s certificate with you which confirm that it is medical material for personal<br />\n' +
                'needs. If you want more information, please go to TSA&rsquo;s website. ( http://www.tsa.gov )</p>\n' +
                '</div>\n' +
                '</div>\n' +
                '\n'
            ,
            id:7
        },
    ]

    return(
        <div className={classes.wrapper}>
            <div className="container">
                <div className="page_title">
                    Your life-changing journey of Israel begins here.
                </div>
                <div className={classes.desc}>
                    Serving churches and Christian ministries from around the world with the finest travel agents. If you are a tour agent, tour leader, pastors, or a visitor looking for a trusted partner in Israel. Please contact us today for more information on how we can serve you.
                </div>

                <Itinerary faqs={data} />
            </div>
        </div>

    )


}

export default Faqs
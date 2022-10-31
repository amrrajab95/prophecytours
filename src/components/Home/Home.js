import React,{useEffect} from "react";
import Slider from "../Slider/Slider"
import ContactUs from "../ContactUs/ContactUs"
import Featured from "../Featured/Featured"
import Services from "../Services/Services"
import BookLet from "../BookLet/BookLet"
import BottomBlock from "../BottomBlock/BottomBlock"
import Newsletter from "../Newsletter/Newsletter"
import featured1 from "../../media/images/f1.png"
import featured2 from "../../media/images/f2.png"
import featured3 from "../../media/images/f3.png"
import flight from "../../media/images/fly.png"
import servicesImg from "../../media/images/services.png"
import bookLet from "../../media/images/book.png"
import bottomBlockImg from "../../media/images/jordan.png"
import * as ContactActions from "../../store/actions/contactAction"
import * as homeActions from "../../store/actions/homeActions"
import * as actions from "../../store/actions/contactAction";
import {useDispatch,useSelector} from "react-redux";
import parse from 'html-react-parser';
const Homepage = (props) => {
    const dispatch = useDispatch();
    const data =useSelector((state)=>state.homepage);
    useEffect(()=>{
        dispatch(homeActions.getMainBannerItems());
    },[])
    console.log(data);
    const sliderData =data.main_slider_items.map((_item)=>(
        {
            title:parse(_item.title),
            description:parse(_item.description),
            btns: [
                {
                    title: "START YOUR JOURNEY",
                    path: "",
                    type: "fill",
                    color: "secondary",
                },
                {
                    title: "GET A TASTE",
                    path: "",
                    type: "stroke",
                    color: "secondary",
                }
            ]
        }

    )
    );
    const contactUsData = {
        title: "EXPENSES FOR PASSPORTS OR ANY ADDITIONAL DOCUMENTS THAT MAY BE REQUIRED",
        description: "Passports must be valid after 6 months of return date. Personal articles Laundry, other beverages (wines, liquors, mineral water, tea, coffee, etc.) and food that are not on the menus of your included meal package, and any additional luggage.",
        btns: [
            {
                title: "Contact Us",
                path: "",
                type: "fill",
                color: "primary",
                clicked:()=>dispatch(actions.show())
            },
            {
                title: "Learn More",
                path: "",
                type: "stroke",
                color: "primary",
            }
        ]
    }
    const featuredData = {
        title: "FEATURED DESTINATIONS TOURES",
        image: flight,
        description: "Passports must be valid after 6 months of return date. Personal articles Laundry, other beverages (wines, liquors, mineral water, tea, coffee, etc.) and food that are not on the menus of your included meal package, and any additional luggage.",
        items: [
            {
                title: "THE HOLY LAND, ISRAEL",
                img: featured1
            },
            {
                title: "THE HOLY LAND, ISRAEL",
                img: featured2
            },
            {
                title: "THE HOLY LAND, ISRAEL",
                img: featured3
            }
        ],
        btns: [
            {
                title: "Contact Us",
                path: "",
                type: "fill",
                color: "primary",
                clicked:()=>dispatch(actions.show())
            },
            {
                title: "Sea More",
                path: "/tours",
                type: "stroke",
                color: "primary",
            }
        ]

    }
    const servicesData = {
        title: "Our Services",
        image: servicesImg,
        description: "Whether you're a travel agent, tour leader, pastor, or prospective visitor, check out some of the ways we can serve your group during your next journey to Israel, making your visit transformational and memorable.",
        items: [
            {
                title: "From Budget to Luxury Tours",
                img: featured1,
                description:"The treasures the land of Israel offers to vary as widely as the many types of guests we host."
            },
            {
                title: "From Budget to Luxury Tours",
                img: featured2,
                description:"The treasures the land of Israel offers to vary as widely as the many types of guests we host."

            },
            {
                title: "From Budget to Luxury Tours",
                img: featured3,
                description:"The treasures the land of Israel offers to vary as widely as the many types of guests we host."
            }
        ],
        btns: [
            {
                title: "Contact Us",
                path: "",
                type: "fill",
                color: "primary",
                clicked:()=>dispatch(actions.show())
            },
        ]

    }
  const bookLetData = {
        title: "GET YOUR FREE E-BOOKLET TODAY!",
        image: bookLet,
        description: "Signup for our newsletter delivering fresh updates from Israel, and receive a free copy of our e-book exploring the biblical view of Christian/Jewish relations:",

    }
    const bottomBlockData= {
        title: "HOLY LAND & JORDAN PILGRIMAGE ITINERARY",
        image: bottomBlockImg,

    }

    return (
        <React.Fragment>
            <Slider data={sliderData}/>
            <ContactUs data={contactUsData}/>
            <Featured data={featuredData}/>
            <BookLet data={bookLetData}/>
            <Services data={servicesData}/>
            <BottomBlock data={bottomBlockData}/>

        </React.Fragment>
    )

}

export default Homepage;
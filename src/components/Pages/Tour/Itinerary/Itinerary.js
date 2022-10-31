import React, {useState} from "react";
import classes from "./Itinerary.module.css"
import Accordion from "../../UI/Accordion/Accordion"
const Itinerary =(props)=>{
    const data=[
        {title:"DAY 1 - DEPARTURE USA TO PARIS",
            content:"Today: Your pilgrimage begins today as you depart on your overnight flight to Paris. Meals and drinks served aloft.",
            id:1
        },
        {title:"DAY 1 - DEPARTURE USA TO PARIS",
            content:"Today: Your pilgrimage begins today as you depart on your overnight flight to Paris. Meals and drinks served aloft.",
            id:2
        },
        {title:"DAY 1 - DEPARTURE USA TO PARIS",
            content:"Today: Your pilgrimage begins today as you depart on your overnight flight to Paris. Meals and drinks served aloft.",
            id:3
        },
        {title:"DAY 1 - DEPARTURE USA TO PARIS",
            content:"Today: Your pilgrimage begins today as you depart on your overnight flight to Paris. Meals and drinks served aloft.",
            id:4
        },
        {title:"DAY 1 - DEPARTURE USA TO PARIS",
            content:"Today: Your pilgrimage begins today as you depart on your overnight flight to Paris. Meals and drinks served aloft.",
            id:5
        },
        {title:"DAY 1 - DEPARTURE USA TO PARIS",
            content:"Today: Your pilgrimage begins today as you depart on your overnight flight to Paris. Meals and drinks served aloft.",
            id:6
        },
        {title:"DAY 1 - DEPARTURE USA TO PARIS",
            content:"Today: Your pilgrimage begins today as you depart on your overnight flight to Paris. Meals and drinks served aloft.",
            id:7
        },
    ]

    const [activeItem,setActiveItem]=useState(1);

    const showHandler=(id)=>{
        if(id===activeItem){
            setActiveItem(0)
            return;
        }
        setActiveItem(id)
    }

    const _jsxItems=data.map((_item)=>{
        return(
            <Accordion key={_item.id} onClickHandler={showHandler.bind(this,_item.id)} title={_item.title} content={_item.content} active={_item.id===activeItem} />
        )
    })

    return (
        <div className={classes.wrapper} id="sec_2">
            <div className="container">
                <div className="page_title">
                    {props.title?props.title:""}
                </div>
                {
                    _jsxItems
                }
            </div>
        </div>


    )
}

export default Itinerary;
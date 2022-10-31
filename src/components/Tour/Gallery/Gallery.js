import React from "react";
import classes from "./Gallery.module.css"
import GalleryItem from "./GalleryItem/GalleryItem";
import jordanImage from "../../../media/images/jordan.png"
import f1 from "../../../media/images/f1.png"
import f2 from "../../../media/images/f2.png"
import f3 from "../../../media/images/f3.png"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const Gallery = (props) => {
    const [open, setOpen] = React.useState(false);

    const openHandler=()=>{
        setOpen(true);
    }

    const closeHandler=()=>{
        setOpen(false);
    }

    const galleryData=[
        {
            day:1,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        },
        {
            day:2,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        },
        {
            day:3,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        },
        {
            day:4,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        },
        {
            day:5,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        },
        {
            day:6,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        },
        {
            day:7,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        },
        {
            day:8,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        },
        {
            day:9,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        } ,
        {
            day:10,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        } ,
        {
            day:11,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        } ,
        {
            day:12,
            title:"Jerusalem/ Bethlehem/ Ein Karem/ New City of Jerusalem",
            images:[
                {
                    title:"Jerusalem",
                    source:f1
                },
                {
                    title:"Jerusalem",
                    source:f2
                },
                {
                    title:"Jerusalem",
                    source:f3
                },
            ]
        }

    ];
    const _jsxData=   galleryData.map((_item)=>(
        <GalleryItem />
    ))


    return(
        <div className={classes.wrapper} id="sec_4">
            <div className="container">
                <div className="page_title">
                    GALLERY
                </div>
                <div className={classes.content}>
                    {
                        galleryData.map((_item)=>(
                            <GalleryItem day={_item.day} title={_item.title} onOpen={openHandler}/>
                        ))
                    }

                </div>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[
                    { src: f1},
                    { src: jordanImage },
                    { src:f2 },
                    { src:f3 },
                ]}
            />
        </div>

    )

}

export default Gallery;
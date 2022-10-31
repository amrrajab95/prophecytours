import React from "react";
import classes from "./Slider.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Button from "../UI/Button/Button";
const slider = (props) => {

    let _jsx = props.data.map((_item) =>{
        let _btns =null;
        if(_item.btns.length){
            _btns=_item.btns.map((_item)=>(
                <Button title={_item.title} path={_item.path} type={_item.type} color={_item.color} />
                )

            )
        }

        return(
            <div className={classes.item}>
                <div className="container">
                    <div className={classes.title}>
                        {_item.title}
                    </div>
                    <div className={classes.description}>
                        {_item.description}
                    </div>
                    {_item.btns?<div className={classes.btns}>
                        {_btns}
                    </div>:null}
                </div>
            </div>
        )
    })
    return (
       <Carousel>
           {_jsx}
       </Carousel>
    )


}

export default slider;
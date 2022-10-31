import React from "react";
import classes from "./Featured.module.css"
import Card1 from "../../../components/UI/Cards/Card1/Card1"
import Card3 from "../../../components/UI/Cards/Card3/Card3"
import Button from "../../../components/UI/Button/Button"
import BlockHeader from "../../UI/BlockHeader/BlockHeader"
const featured = (props) => {
    let _btns =null;
    let _items =null;
    if(props.data.btns.length){
        _btns=props.data.btns.map((_item)=>(
                <Button title={_item.title} path={_item.path} type={_item.type} color={_item.color} />
            )

        )
    }
    if(props.data.items){
        _items=props.data.items.map((_item)=>(
               <Card3 title={_item.title} img={_item.img} destination={_item.destination} date={_item.date}/>
            )

        )
    }

    return(
        <div className={classes.wrapper} id="sec_6">
            <div className="container">
               {/*<BlockHeader image={props.data.image} title={props.data.title}/>*/}
                <div className="page_title">
                    UPCOMING TRIPS
                </div>
                <div className={classes.content}>
                    {_items}
                </div>
                {_btns?<div className="btns">
                    {_btns}
                </div>:null}
            </div>

        </div>
    )


}

export default featured;
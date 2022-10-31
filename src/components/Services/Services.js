import React from "react";
import classes from "./Services.module.css"
import Card2 from "../../components/UI/Cards/Card2/Card2"
import Button from "../../components/UI/Button/Button"
import BlockHeader from "../UI/BlockHeader/BlockHeader"
const featured = (props) => {
    let _btns =null;
    let _items =null;
    if(props.data.btns.length){
        _btns=props.data.btns.map((_item)=>(
                <Button onClick={_item.clicked} title={_item.title} path={_item.path} type={_item.type} color={_item.color} />
            )
        )
    }
    if(props.data.items){
        _items=props.data.items.map((_item)=>(
                <Card2 title={_item.title} img={_item.img} description={_item.description}/>
            )

        )
    }

    return(
        <div className={classes.wrapper}>
            <div className="container">
                <BlockHeader image={props.data.image} title={props.data.title} description={props.data.description}/>
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
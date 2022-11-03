import React from "react";
import classes from "./ContactItems.module.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import EmailIcon from '@mui/icons-material/Email';
import ContactItem from "./ContactItem/ContactItem";
import {useSelector} from "react-redux";
const icons={
    LocationOnIcon:LocationOnIcon,
    LocalPhoneIcon:LocalPhoneIcon,
    QueryBuilderIcon:QueryBuilderIcon,
    LocalParkingIcon:LocalParkingIcon,
    EmailIcon:EmailIcon

}
const ContactItems = (props)=>{
    const address=useSelector((state)=>state.contactSate.contactAddress);
    const dataJsx = address.map((_item)=>(
        <ContactItem title={_item.title} content={_item.content} icon={icons[_item.icon]}/>
    ))
    return(
        <div className={classes.wrapper}>
            {dataJsx}
        </div>
    )


}


export default ContactItems;
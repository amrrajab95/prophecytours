import React from "react";
import classes from "./ContactItems.module.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import EmailIcon from '@mui/icons-material/Email';
import ContactItem from "./ContactItem/ContactItem";

const data = [
    {title:"Address",icon:LocationOnIcon,content:"<p>1300 N. Sam Houston Pkwy</p>" +
            "<p>E. Suite 125</p>" +
            "<p>HOUSTON, TX 77032</p>"},
    {title:"Phone",icon:LocalPhoneIcon,content:"1-844-400-9559"},
    {title:"Opening Hours",icon:QueryBuilderIcon,content:"<p>Monday ………….…. 9 am – 5 pm</p>" +
            "<p>Tuesday ………….…. 9 am – 5 pm</p>" +
            "<p>Wednesday …….…. 9 am – 5 pm</p>" +
            "<p>Thursday ……….….. 9 am – 5 pm</p>" +
            "<p>Friday …………….….. 9 am – 5 pm</p>" +
            "<p>Saturday, Sunday ………… Closed</p>"},
    {title:"Parking",icon:LocalParkingIcon,content:"Free Parking"},
    {title:"Email",icon:EmailIcon,content:"Sales@prophecy.com"},

];
const dataJsx = data.map((_item)=>(
    <ContactItem title={_item.title} content={_item.content} icon={_item.icon}/>
))
const ContactItems = (props)=>{

    return(
        <div className={classes.wrapper}>
            {dataJsx}
        </div>
    )


}


export default ContactItems;
import React from "react";
import classes from "./Social.module.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const socialLinks = (props) => {

    const _data=[
        {icon:FacebookIcon,path:"",color:"#998543",title:""},
        {icon:InstagramIcon,path:"",color:"#998543",title:""},
        {icon:TwitterIcon,path:"",color:"#998543",title:""},
        {icon:YouTubeIcon,path:"",color:"#998543",title:""},
        {icon:WhatsAppIcon,path:"",color:"#998543",title:""},
    ]
   let _jsx=  _data.map((_item)=>(
        <li>
            <a href={_item.path}>
                {<_item.icon style={{color:_item.color}} />}
            </a>
        </li>
    ))

    return (
        <ul className={classes.content}>
            {_jsx}
        </ul>
    )


}

export default socialLinks;
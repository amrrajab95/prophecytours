import * as actionTypes from "./actionTypes"
import baseAxios from "../../baseAxios";
import {GET_CONTACT_ADDRESS} from "./actionTypes";
export const show = () => {
    return (
        {
            type: actionTypes.SHOW_CONTACT
        }
    )


}
export const hide = () => {
    return (
        {
            type: actionTypes.HIDE_CONTACT
        }
    )
}

export const sendContact = (data) => {
    return ((dispatch)=>{
        baseAxios.post('/contactUsRequest',data,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }}).then(()=>{
            dispatch(sendContactSuccess())
        })
    })
}
export const sendContactSuccess = () => {
    return (
        {
            type: actionTypes.SEND_CONTACT_SUCCESS
        }
    )
}
export const getAddress = () => {
    return (
        (dispatch)=>{
            baseAxios.get("/address").then((res)=>{
                dispatch(getAddressSuccess(res.data))
            })

        }
    )
}
export const getAddressSuccess = (data) => {
    return (
        {
            type: actionTypes.GET_CONTACT_ADDRESS,
            data:data
        }
    )
}
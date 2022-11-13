import * as actionTypes from "./actionTypes"
import apis from "../../baseAxios";
export const getMainBannerItems = () => {
    return((dispatch)=>(
        apis.get("/banners").then((res)=>{
            dispatch(getMainBannerItemsSuccess(res.data));
        })
    ))
}
export const getBlock1 = () => {
    return((dispatch)=>(
        apis.get("/homeBlock1").then((res)=>{
            dispatch(getBlock1Success(res.data));
        })
    ))



}
const getBlock1Success = (data) => {
    return(
        {
            type:actionTypes.GET_BLOCK1,
            data:data
        }
    )


}
const getMainBannerItemsSuccess = (data) => {
    return(
        {
            type:actionTypes.GET_MAIN_SLIDER_ITEMS,
            data:data
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
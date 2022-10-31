import * as actionTypes from "./actionTypes"
import apis from "../../baseAxios";
export const getMainBannerItems = () => {
    return((dispatch)=>(
        apis.get("/banners").then((res)=>{
            console.log('ss');
            dispatch(getMainBannerItemsSuccess(res.data));
        })
    ))


    
}
const getMainBannerItemsSuccess = (data) => {
    console.log('ss');
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
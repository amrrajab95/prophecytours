import * as actionTypes from "./actionTypes"

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
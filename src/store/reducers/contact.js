import {updateObject} from "../../utility";
import * as actions  from  "../actions/actionTypes"
const initialState={
    show:false,
    success:false,
    contactAddress:[]
}

const reducer =(state=initialState,action)=>{

    switch (action.type){
        case actions.SHOW_CONTACT:
            state= updateObject(state,{show:true});
            return state;
            case actions.HIDE_CONTACT:
            state= updateObject(state,{show:false});
            return state;
            case actions.SEND_CONTACT_SUCCESS:
            state= updateObject(state,{success:true});
            return state;
            case actions.GET_CONTACT_ADDRESS:
            state= updateObject(state,{contactAddress:action.data});
            return state;
    }
    return  state;

}

export default reducer;
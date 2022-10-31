import {updateObject} from "../../utility";
import * as actions  from  "../actions/actionTypes"
const initialState={
    show:false
}

const reducer =(state=initialState,action)=>{

    switch (action.type){
        case actions.SHOW_CONTACT:
            state= updateObject(state,{show:true});
            return state;
            case actions.HIDE_CONTACT:
            state= updateObject(state,{show:false});
            return state;
    }
    return  state;

}

export default reducer;
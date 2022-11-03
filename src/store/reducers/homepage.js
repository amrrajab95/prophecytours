import {updateObject} from "../../utility";
import * as actions  from  "../actions/actionTypes"
const initialState={
    main_slider_items:[],
    block1:{},

}

const reducer =(state=initialState,action)=>{

    switch (action.type){
        case actions.GET_MAIN_SLIDER_ITEMS:
            console.log(action.data);
            state= updateObject(state,{main_slider_items:action.data});
            return state;
        case actions.GET_BLOCK1:
            console.log(action.data);
            state= updateObject(state,{block1:action.data});
            return state;
    }
    return  state;

}

export default reducer;
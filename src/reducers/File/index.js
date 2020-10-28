import {RESPONSE_FILE, UPDATE_FILE} from '@actions/file';
const initialState = {
    response:{}
};

export default (state=initialState, action)=>{
    switch(action.type){
        case UPDATE_FILE:
            return {
                ...state,
                response : initialState.response
            };
        case RESPONSE_FILE:
            return {...state, response:action.response};
        default:
            return {...state};
    }
}
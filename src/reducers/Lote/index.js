import initialState from './initialState';
import {
    FETCH_LOTES_REQUESTED,
    FETCH_LOTES_SUCCEEDED,
    UPDATE_LOTE,
    FETCH_ONE_LOTE_REQUESTED,
    FETCH_ONE_LOTE_SUCCEEDED
} from '@actions/lote';
export default (state=initialState, action)=>{
    switch(action.type){
        case FETCH_LOTES_REQUESTED:
            return {
                ...state,
                lotes : [],
                loteActual : initialState.loteActual
            };
        case FETCH_LOTES_SUCCEEDED:
            return {
                ...state,
                lotes : action.lotes
            };
        case UPDATE_LOTE:
            return {
                ...state,
                loteActual : action.updates
            }
        case FETCH_ONE_LOTE_REQUESTED:
            return {
                ...state,
                loteActual : initialState.loteActual
            };
        case FETCH_ONE_LOTE_SUCCEEDED:
            return {
                ...state,
                loteActual : action.loteActual
            };
        default:
            return {...state};
    }
};

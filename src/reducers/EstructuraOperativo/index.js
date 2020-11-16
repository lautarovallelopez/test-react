import initialState from './initialState';
import {
    FETCH_ESTRUCTURA_OPERATIVO_REQUESTED,
    FETCH_ESTRUCTURA_OPERATIVO_SUCCEEDED,
    UPDATE_CAMPO,
    FETCH_ONE_CAMPO_REQUESTED,
    FETCH_ONE_CAMPO_SUCCEEDED
} from '@actions/estructuraOperativo';

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_ESTRUCTURA_OPERATIVO_REQUESTED:
            return {
                ...state,
                estructura : [],
                columna : initialState.campo
            }
        case FETCH_ESTRUCTURA_OPERATIVO_SUCCEEDED:
            return {
                ...state,
                estructura : action.response.estructuras
            }
        case UPDATE_CAMPO:
            return {
                ...state,
                campo : action.updates
            }
        case FETCH_ONE_CAMPO_REQUESTED:
            return {
                ...state,
                campo : initialState.campo
            };
        case FETCH_ONE_CAMPO_SUCCEEDED:
            return {
                ...state,
                campo : action.response
            }
        default:
            return {...state};
    }
}
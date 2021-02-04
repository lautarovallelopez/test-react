import initialState from './initialState';
import {
    FETCH_TIPO_DE_ROL_REQUESTED,
    FETCH_TIPO_DE_ROL_SUCCEEDED
} from '@actions/tipoDeRol';

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_TIPO_DE_ROL_REQUESTED:
            return {
                ...state,
                tiposDeRoles: []
            }
        case FETCH_TIPO_DE_ROL_SUCCEEDED:
            return {
                ...state,
                tiposDeRoles : action.response.tiposDeRoles
            }
        default:
            return {...state};
    }
}
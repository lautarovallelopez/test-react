import initialState from './initialState';
import {
    FETCH_USUARIOS_REQUESTED,
    FETCH_USUARIOS_SUCCEEDED
} from '@actions/usuarios';

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USUARIOS_REQUESTED:
            return {
                ...state,
                usuarios: []
            }
        case FETCH_USUARIOS_SUCCEEDED:
            return {
                ...state,
                usuarios : action.response.usuarios
            }
        default:
            return {...state};
    }
}
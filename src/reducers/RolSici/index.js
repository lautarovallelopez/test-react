import initialState from './initialState';
import {
    FETCH_ROLES_SICI_REQUESTED,
    FETCH_ROLES_SICI_SUCCEEDED,
    UPDATE_ROL_SICI,
    FETCH_ONE_ROL_SICI_REQUESTED,
    FETCH_ONE_ROL_SICI_SUCCEEDED
} from '@actions/rolSici';

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_ROLES_SICI_REQUESTED:
            return {
                ...state
            }
        case FETCH_ROLES_SICI_SUCCEEDED:
            return {
                ...state,
                roles : action.response.roles
            }
        case UPDATE_ROL_SICI:
            return {
                ...state,
                rolActual : action.updates
            }
        case FETCH_ONE_ROL_SICI_REQUESTED:
            return {
                ...state,
                rolActual : initialState.rolActual
            };
        case FETCH_ONE_ROL_SICI_SUCCEEDED:
            return {
                ...state,
                rolActual : action.rol
            }
        default:
            return {...state};
    }
}
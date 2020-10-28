import {
    FETCH_OPERATIVOS_REQUESTED,
    FETCH_OPERATIVOS_SUCCEEDED,
    UPDATE_OPERATIVO,
    FETCH_ONE_OPERATIVO_REQUESTED,
    FETCH_ONE_OPERATIVO_SUCCEEDED
} from '@actions/operativo';

import initialState from './initialState';


export default function farmData(
    state = initialState,
    action
) {
    switch (action.type) {
        case FETCH_OPERATIVOS_REQUESTED:
            return {
                ...state,
                operativos: initialState.operativos,
                operativoActual : initialState.operativoActual
            };
        case FETCH_OPERATIVOS_SUCCEEDED:
            return {
                ...state,
                operativos : action.result.operativos
            };
        case UPDATE_OPERATIVO:
            return {
                ...state,
                operativoActual : action.change
            };
        case FETCH_ONE_OPERATIVO_REQUESTED:
            return {
                ...state,
                operativoActual : initialState.operativoActual
            };
        case FETCH_ONE_OPERATIVO_SUCCEEDED:
            return {
                ...state,
                operativoActual : action.operativo
            };
        default:
            return state;
    }
}

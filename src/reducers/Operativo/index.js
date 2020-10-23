import {
    FETCH_OPERATIVOS_REQUESTED,
    FETCH_OPERATIVOS_SUCCEEDED,
    UPDATE_OPERATIVO
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
                operativos : action.result.operativos,
                estados : action.result.estadosOperativos
            }
        case UPDATE_OPERATIVO:
            return {
                ...state,
                operativoActual : action.change
            }
        default:
            return state;
    }
}

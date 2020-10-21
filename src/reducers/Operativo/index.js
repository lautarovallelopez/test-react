import {
    FETCH_OPERATIVOS_REQUESTED,
    FETCH_OPERATIVOS_SUCCEEDED
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
                operativos: initialState.operativos
            };
        case FETCH_OPERATIVOS_SUCCEEDED:
            return {
                ...state,
                operativos : action.operativos
            }
        default:
            return state;
    }
}

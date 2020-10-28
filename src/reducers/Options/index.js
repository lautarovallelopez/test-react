import initialState from './initialState';
import {
    FETCH_OPTIONS_REQUESTED,
    FETCH_OPTIONS_SUCCEEDED
} from '@actions/options';
import { bindActionCreators } from 'redux';

export default (state=initialState, action) => {
    switch (action.type) {
        case FETCH_OPTIONS_REQUESTED:
            return {
                ...state,
                soportes : [],
                tiposOperativos : [],
                estadosOperativos : [],
                frecuencias : [],
                tiposPreguntas : [],
                estadosLotes : [],
                tiposDiccionarios : [],
                variables : [],
                entradasCampos : [],
            };
        case FETCH_OPTIONS_SUCCEEDED:
            return {
                ...state,
                ...action.options
            }
        default:
            return {...state};
    }
}
import { takeEvery } from 'redux-saga/effects';
import { 
    FETCH_ESTRUCTURA_OPERATIVO_REQUESTED,
    SUBMIT_CAMPO_REQUESTED,
    FETCH_ONE_CAMPO_REQUESTED
} from '@actions/estructuraOperativo';
import {
    fetchEstructura,
    submitCampo,
    fetchOne
} from './estructuraOperativo';

export default [
    takeEvery(FETCH_ESTRUCTURA_OPERATIVO_REQUESTED, fetchEstructura),
    takeEvery(SUBMIT_CAMPO_REQUESTED, submitCampo),
    takeEvery(FETCH_ONE_CAMPO_REQUESTED, fetchOne)
];

import { takeEvery } from 'redux-saga/effects';

import {
    fetchOperativo,
    submitOperativo,
    fetchOneOperativo
}from './operativo';

import {
    FETCH_OPERATIVOS_REQUESTED,
    SUBMIT_OPERATIVO_REQUESTED,
    FETCH_ONE_OPERATIVO_REQUESTED
} from '@actions/operativo';

export default [
    takeEvery(FETCH_OPERATIVOS_REQUESTED, fetchOperativo),
    takeEvery(SUBMIT_OPERATIVO_REQUESTED, submitOperativo),
    takeEvery(FETCH_ONE_OPERATIVO_REQUESTED, fetchOneOperativo)
]
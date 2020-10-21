import {
    all,
    takeEvery
} from 'redux-saga/effects';

import {FETCH_COUNTRIES_REQUESTED} from '@actions/countries';
import {FETCH_OPERATIVOS_REQUESTED} from '@actions/operativo';

import {fetch} from './countries';
import {fetchOperativo} from './operativo';

export default function* root() {
    yield all([
        takeEvery(FETCH_COUNTRIES_REQUESTED, fetch),
        takeEvery(FETCH_OPERATIVOS_REQUESTED, fetchOperativo)
    ]);
}

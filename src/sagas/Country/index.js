import {takeEvery} from 'redux-saga/effects';

import {FETCH_COUNTRIES_REQUESTED} from '@actions/countries';
import {fetch} from './countries';

export default [
    takeEvery(FETCH_COUNTRIES_REQUESTED, fetch)   
]
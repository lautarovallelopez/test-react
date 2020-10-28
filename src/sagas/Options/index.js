import {takeEvery} from 'redux-saga/effects';

import {FETCH_OPTIONS_REQUESTED} from '@actions/options';
import {fetchOptions} from './options';

export default [
    takeEvery(FETCH_OPTIONS_REQUESTED, fetchOptions)   
]

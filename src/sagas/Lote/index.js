import {takeEvery} from 'redux-saga/effects';
import {
    FETCH_LOTES_REQUESTED,
    FETCH_ONE_LOTE_REQUESTED,
    SUBMIT_LOTE_REQUESTED
} from '@actions/lote';
import {
    fetchLotes,
    fetchOneLote,
    saveLote
} from './lote';

export default [
    takeEvery(FETCH_LOTES_REQUESTED, fetchLotes),
    takeEvery(FETCH_ONE_LOTE_REQUESTED, fetchOneLote),
    takeEvery(SUBMIT_LOTE_REQUESTED, saveLote)
];

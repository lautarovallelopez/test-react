import {takeEvery} from 'redux-saga/effects';
import {UPDATE_FILE} from '@actions/file';
import {sendFile} from './file';

export default [
    takeEvery(UPDATE_FILE, sendFile)
]
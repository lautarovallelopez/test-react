import {all, takeEvery} from 'redux-saga/effects';
import {
    FETCH_USER_REQUESTED
} from '../actions'


export default function* root() {
    yield all([
        takeEvery(FETCH_USER_REQUESTED, fetchUsers)
    ])
}
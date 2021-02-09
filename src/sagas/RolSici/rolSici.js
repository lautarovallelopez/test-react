import {call, put, select} from 'redux-saga/effects';
import {head} from 'lodash';
import {
    fetchRolesSiciSucceeded,
    fetchRolesSiciRequested,
    fetchOneRolSiciSucceeded,
    submitRolSiciSucceeded
} from '@actions/rolSici';

import RolSiciService from '@services/rolSici';



export function* fetchRolesSici() {
    const result = yield call(RolSiciService.fetch);
    yield put(fetchRolesSiciSucceeded(result));
}

export function* deleteRolSici({ids}){
    const result = yield call(RolSiciService.delete, ids);
    yield put(fetchRolesSiciRequested());
}

export function* fetchOneRolSici({ids}){
    const {roles} = yield call(RolSiciService.fetchOne, ids);
    yield put(fetchOneRolSiciSucceeded(head(roles)));
}
export function* submitRoleSici(){
    const {rolActual} = yield select(state=>state.rolSici);
    const response = yield call(RolSiciService.submit, rolActual);
    yield put(submitRolSiciSucceeded(response));
}

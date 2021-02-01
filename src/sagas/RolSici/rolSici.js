import {call, put, select} from 'redux-saga/effects';

import {
    fetchRolesSiciSucceeded
    /*submitRolSiciSucceeded,
    fetchOneRolSiciSucceeded*/
} from '@actions/rolSici';

import RolSiciService from '@services/rolSici';



export function* fetchRolesSici() {
    const result = yield call(RolSiciService.fetch);
    console.log(result);
    yield put(fetchRolesSiciSucceeded(result));
}

/*export function* submitRoleSici(){
    const {operativoActual} = yield select(state=>state.operativo);
    const response = yield call(RolSiciService.submit, operativoActual);
    yield put(submitRolSiciSucceeded(response));
}

export function* fetchOneRolSici({id}){
    const operativo = yield call(RolSiciService.fetchOne, id);
    yield put(fetchOneRolSiciSucceeded(operativo));
}*/
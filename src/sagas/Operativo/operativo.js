import {call, put, select} from 'redux-saga/effects';

import {
    fetchOperativosSucceeded,
    submitOperativoSucceeded,
    fetchOneOperativoSucceeded
} from '@actions/operativo';

import OperativoService from '@services/operativo';



export function* fetchOperativo() {
    const result = yield call(OperativoService.fetch);
    yield put(fetchOperativosSucceeded(result));
}

export function* submitOperativo(){
    const {operativoActual} = yield select(state=>state.operativo);
    const response = yield call(OperativoService.submit, operativoActual);
    yield put(submitOperativoSucceeded(response));
}

export function* fetchOneOperativo({id}){
    const operativo = yield call(OperativoService.fetchOne, id);
    yield put(fetchOneOperativoSucceeded(operativo));
}
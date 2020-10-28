import { call, put, select } from 'redux-saga/effects';
import { 
    fetchEstructuraOperativoSucceeded,
    submitCampoSucceeded,
    fetchOneCampoSucceeded
} from '@actions/estructuraOperativo';
import EstructuraService from '@services/estructuraOperativo';

export function* fetchEstructura({id_operativo}){
    const estructura = yield call(EstructuraService.fetch, id_operativo);
    yield put(fetchEstructuraOperativoSucceeded(estructura));
}
export function* submitCampo(){
    const {campo} = yield select(state => state.estructuraOperativo)
    const response = yield call(EstructuraService.save, campo);
    yield put(submitCampoSucceeded(response));
}

export function* fetchOne({id_estructura}){
    const response = yield call(EstructuraService.fetchOne, id_estructura);
    yield put(fetchOneCampoSucceeded(response));
}

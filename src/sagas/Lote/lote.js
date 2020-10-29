import {call, put, select} from 'redux-saga/effects';
import {
    fetchLotesSucceeded,
    fetchOneLoteSucceeded,
    submitLoteSucceeded
} from '@actions/lote';
import LoteService from '@services/lote';


export function* fetchLotes({id_operativo}){
    const {lotes} = yield call(LoteService.apiCall, id_operativo);
    yield put(fetchLotesSucceeded(lotes));
}
export function* fetchOneLote({id_lote}){
    const {lotes} = yield call(LoteService.apiCallOne, id_lote);
    yield put(fetchOneLoteSucceeded(lotes[0]));
}
export function* saveLote({file}){
    const {loteActual} = yield select(state => state.lote);
    Object.assign(loteActual, file);
    const response = yield call(LoteService.apiSave, loteActual);
    yield put(submitLoteSucceeded(response));
}
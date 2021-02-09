import {call, put, select} from 'redux-saga/effects';
import {
    fetchTipoDeRolSucceeded,
} from '@actions/tipoDeRol';

import TipoDeRolService from '@services/tipoDeRol';



export function* fetchTipoDeRol() {
    const result = yield call(TipoDeRolService.fetch);
    yield put(fetchTipoDeRolSucceeded(result));
}

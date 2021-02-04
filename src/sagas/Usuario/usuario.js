import {call, put, select} from 'redux-saga/effects';
import {
    fetchUsuariosSucceeded,
} from '@actions/usuarios';

import UsuarioService from '@services/usuario';



export function* fetchUsuarios() {
    const result = yield call(UsuarioService.fetch);
    yield put(fetchUsuariosSucceeded(result));
}

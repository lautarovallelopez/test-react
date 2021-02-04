import { takeEvery } from 'redux-saga/effects';

import {
    fetchTipoDeRol
}from './tipoDeRol';

import {
    FETCH_TIPO_DE_ROL_REQUESTED,
} from '@actions/tipoDeRol';

export default [
    takeEvery(FETCH_TIPO_DE_ROL_REQUESTED, fetchTipoDeRol)
]
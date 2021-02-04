import { takeEvery } from 'redux-saga/effects';

import {
    fetchUsuarios
}from './usuario';

import {
    FETCH_USUARIOS_REQUESTED,
} from '@actions/usuarios';

export default [
    takeEvery(FETCH_USUARIOS_REQUESTED, fetchUsuarios)
]
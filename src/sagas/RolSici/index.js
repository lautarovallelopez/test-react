import { takeEvery } from 'redux-saga/effects';

import {
    fetchRolesSici,
    deleteRolSici,
    fetchOneRolSici
    /*submitRoleSici,
    */
}from './rolSici';

import {
    FETCH_ROLES_SICI_REQUESTED,
    DELETE_ROL_SICI_REQUESTED,
    FETCH_ONE_ROL_SICI_REQUESTED
    /*FETCH_ONE_ROL_SICI_REQUESTED*/
} from '@actions/rolSici';

export default [
    takeEvery(FETCH_ROLES_SICI_REQUESTED, fetchRolesSici),
    takeEvery(DELETE_ROL_SICI_REQUESTED, deleteRolSici),
    takeEvery(FETCH_ONE_ROL_SICI_REQUESTED, fetchOneRolSici),
    /*takeEvery(FETCH_ONE_ROL_SICI_REQUESTED, fetchOneRolSici)*/
]
import { takeEvery } from 'redux-saga/effects';

import {
    fetchRolesSici
    /*submitRoleSici,
    fetchOneRolSici*/
}from './rolSici';

import {
    FETCH_ROLES_SICI_REQUESTED
    /*SUBMIT_ROL_SICI_REQUESTED,
    FETCH_ONE_ROL_SICI_REQUESTED*/
} from '@actions/rolSici';

export default [
    takeEvery(FETCH_ROLES_SICI_REQUESTED, fetchRolesSici)
    /*takeEvery(SUBMIT_ROL_SICI_REQUESTED, submitRoleSici),
    takeEvery(FETCH_ONE_ROL_SICI_REQUESTED, fetchOneRolSici)*/
]
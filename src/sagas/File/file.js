import {call, put} from 'redux-saga/effects';
import FileService from '@services/file';
import {responseFile} from '@actions/file';
export function* sendFile({file}){
    const response = yield call(FileService.send, file);
    yield put(responseFile(response));
}
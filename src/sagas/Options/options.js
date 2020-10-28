import {call, put} from 'redux-saga/effects';

import { fetchOptionsSucceeded } from '@actions/options';

import OptionsService from '@services/options';

export function* fetchOptions() {
    const result = yield call(OptionsService.fetch);
    yield put(fetchOptionsSucceeded(result));
}

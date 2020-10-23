import {call, put} from 'redux-saga/effects';

import {fetchOperativosSucceeded} from '@actions/operativo';
import OperativoService from '@services/operativo';

export function* fetchOperativo() {
    const result = yield call(OperativoService.fetch);
    yield put(fetchOperativosSucceeded(result));
}

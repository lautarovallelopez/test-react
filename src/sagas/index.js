import {all} from 'redux-saga/effects';
import {concat} from 'lodash';

import country from './Country';
import operativo from './Operativo';


export default function* root() {
    yield all(
        concat(
            country,
            operativo
        )
    );
}

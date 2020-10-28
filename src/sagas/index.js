import {all} from 'redux-saga/effects';
import {concat} from 'lodash';

import country from './Country';
import operativo from './Operativo';
import options from './Options';
import estructuraOperativo from './EstructuraOperativo';
import file from './File';
export default function* root() {
    yield all(
        concat(
            country,
            operativo,
            options,
            estructuraOperativo,
            file
        )
    );
}

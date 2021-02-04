import {all} from 'redux-saga/effects';
import {concat} from 'lodash';

import operativo from './Operativo';
import options from './Options';
import estructuraOperativo from './EstructuraOperativo';
import file from './File';
import lote from './Lote';
import rolSici from './RolSici';
import usuario from './Usuario';
import TipoDeRol from './TipoDeRol';
export default function* root() {
    yield all(
        concat(
            operativo,
            options,
            estructuraOperativo,
            file,
            lote,
            rolSici,
            usuario,
            TipoDeRol
        )
    );
}

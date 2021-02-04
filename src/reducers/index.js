import {combineReducers} from 'redux';
import farmData from './FarmData';
import staticData from './SaticData';
import operativo from './Operativo';
import options from './Options';
import estructuraOperativo from './EstructuraOperativo';
import file from './File';
import lote from './Lote';
import rolSici from './RolSici';
import usuario from './Usuarios';
import tipoDeRol from './TipoDeRol'
export default combineReducers({
    farmData,
    staticData,
    operativo,
    options,
    file,
    estructuraOperativo,
    lote,
    rolSici,
    usuario,
    tipoDeRol
});

import {combineReducers} from 'redux';
import farmData from './FarmData';
import staticData from './SaticData';
import operativo from './Operativo';
import options from './Options';
import estructuraOperativo from './EstructuraOperativo';
import file from './File';
import lote from './Lote';
export default combineReducers({
    farmData,
    staticData,
    operativo,
    options,
    file,
    estructuraOperativo,
    lote
});

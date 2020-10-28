import {combineReducers} from 'redux';
import countries from './Country';
import farmData from './FarmData';
import staticData from './SaticData';
import operativo from './Operativo';
import options from './Options';
import estructuraOperativo from './EstructuraOperativo';
import file from './File';

export default combineReducers({
    countries,
    farmData,
    staticData,
    operativo,
    options,
    file,
    estructuraOperativo
});

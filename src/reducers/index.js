import {combineReducers} from 'redux';

import countries from './countries';
import farmData from './farmData';
import staticData from './staticData';
import operativo from './Operativo';
export default combineReducers({
    countries,
    farmData,
    staticData,
    operativo
});


import {combineReducers} from 'redux';
import staticData from './staticData';
import farmData from './farmData';

export default combineReducers({
    staticData,
    farmData
});

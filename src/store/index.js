import {createStore, applyMiddleware, compose} from 'redux';
import saga from 'redux-saga';

import reducers from '../reducers';
import sagas from '../sagas';

const sagaMiddleware = saga();

let store;

export default initialState => {
    store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(sagas);

    return store;
}

import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import List from './List';
import Edit from './Edit';
const Operativo = ({match : {path}})=>(
    <Switch>
        <Route path={`${path}/new`} exact component={Edit} />
        <Route path={`${path}/:ID_USUARIO/:ID_ROL_USUARIO`} exact component={Edit} />
        <Route path={path} component={List} />
    </Switch>
);

export default Operativo;

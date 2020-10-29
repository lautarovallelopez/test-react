import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import List from './List';
import Edit from './Edit';
const Operativo = ({match : {path}})=>(
    <Switch>
        <Route path={`${path}/:id_operativo/new`} exact component={Edit} />
        <Route path={`${path}/:id_operativo/:id_lote`} component={Edit} />
        <Route path={`${path}/:id_operativo`} exact component={List} />
        <Route path={path} component={List} />
    </Switch>
);

export default Operativo;

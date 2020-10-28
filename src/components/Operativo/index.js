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
        <Route path={`${path}/:id`} exact component={Edit} />
        <Route path={path} component={List} />
    </Switch>
);

export default Operativo;

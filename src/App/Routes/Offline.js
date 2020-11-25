import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import {
    Home,
    Form,
    FarmForm,
    Countries,
    Error,
    Operativo,
    EstructuraOperativo,
    Lote
} from '@components';
import tabs from './tabs';
import Footer from '../Footer';
import Header from '../Header';
export default () => (
    <HashRouter>
        <>

            <Header/>
            <main className="mt-20">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/tabs" component={tabs} />
                    <Route exact path="/app" component={Form}/>
                    <Route exact path="/farm" component={FarmForm}/>
                    <Route exact path="/countries" component={Countries}/>
                    <Route path="/estructuraOperativo" component={EstructuraOperativo} />
                    <Route path="/lotes" component={Lote} />
                    <Route path="/operativo" component={Operativo}/>
                    <Route component={Error}/>
                </Switch>
            </main>
            <Footer/>

        </>
    </HashRouter>
);

import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import {
    Home,
    Error,
    Operativo,
    EstructuraOperativo,
    Lote,
    Codificacion,
    Fuente,
    Variable,
    Nomenclatura,
    Documento,
    Chat,
    Usuario
} from '@components';
import Tabs from './Tabs';
import Footer from '../Footer';
import Header from '../Header';

export default () => (
    <HashRouter>
        <>

            <Header/>
            <main className="mt-20">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path='/tabs' component={Tabs} />
                    <Route path="/estructuraOperativo" component={EstructuraOperativo} />
                    <Route path="/lotes" component={Lote} />
                    <Route path="/operativo" component={Operativo}/>
                    <Route path="/codificacion" component={Codificacion}/>
                    <Route path="/fuentes" component={Fuente}/>
                    <Route path="/variables" component={Variable}/>
                    <Route path="/nomenclaturas" component={Nomenclatura}/>
                    <Route path="/documentos" component={Documento}/>
                    <Route path="/chat" component={Chat}/>
                    <Route path="/usuarios" component={Usuario}/>
                    <Route component={Error}/>
                </Switch>
            </main>
            <Footer/>

        </>
    </HashRouter>
);

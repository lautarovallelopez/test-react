import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
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
    Usuario,
    Corrector,
    TipoObservacion,
    SubtipoNomenclador,
    TipoDiccionario
} from '@components';
import Tabs from './Tabs';
import Footer from '../Footer';
import Header from '../Header';

export default () => (
    <HashRouter>
        <>

            <Header/>
            <main className="mt-20">
                <Container>
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
                        <Route path="/corrector-palabras" component={Corrector}/>
                        <Route path="/tipo_observacion" component={TipoObservacion}/>
                        <Route path="/subtipo-nomenclador" component={SubtipoNomenclador} />
                        <Route path="/tipo-diccionario" component={TipoDiccionario} />
                        <Route component={Error}/>
                    </Switch>
                </Container>
            </main>
            <Footer/>

        </>
    </HashRouter>
);

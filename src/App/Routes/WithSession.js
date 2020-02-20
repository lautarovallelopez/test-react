import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '@components/Home';

import Header from '../Header';
import Footer from '../Footer';

import App from '../../components/App'

const RouterWithSession = () => (
    <HashRouter>
        <>
            <Header/>
            <main className="mt-20">
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route component={Home}/>
                </Switch>

            </main>
            <Footer/>
        </>
    </HashRouter>
);

export default RouterWithSession;

import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

import SignIn from '@components/SignIn';
import Footer from '../Footer';

export default () => (
    <HashRouter>
        <>
            <main>
                <Switch>
                    <Route component={SignIn}/>
                </Switch>
            </main>
            <Footer/>
        </>
    </HashRouter>
);

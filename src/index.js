import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store';
import './sass/app.scss';
import App from './App';
import {Provider} from 'react-redux';

const Root = ({store, comp: Comp}) => (
    <Provider store={store}>
        <Comp/>
    </Provider>
);

const store = configureStore();

ReactDOM.render(
    <Root store={store} comp={App}/>,
   document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

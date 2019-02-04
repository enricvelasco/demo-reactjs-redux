import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'
import customMiddleWares from './middlewares/custom-middlewares';
import promiseMiddleware from './middlewares/redux-promise';


const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

const createStoreWidthMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWidthMiddleware(
        reducers, devToolsExtension && devToolsExtension())}>
    <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

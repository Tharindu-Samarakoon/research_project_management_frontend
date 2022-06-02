import React from "react";
import { createRoot, ReactDOM } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from './reducers';

import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>);
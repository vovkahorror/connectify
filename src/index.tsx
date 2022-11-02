import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {StateType, store} from './redux/redux-store';
import StoreContext from './StoreContext';

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App/>
            </StoreContext.Provider>
        </BrowserRouter>, document.getElementById('root'),
    );
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state);
});
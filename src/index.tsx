import React from 'react';
import './index.css';
import {StateType} from "./redux/store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {store} from './redux/redux-store';

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
                store={store}
            />
        </BrowserRouter>, document.getElementById('root'),
    );
};
rerenderEntireTree(store.getState());

store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state);
});
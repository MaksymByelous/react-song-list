import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import reducers from './reducers';
import SongList from "./components/song-list";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App>
        </App>
    </Provider>,
    document.querySelector('#root')
);
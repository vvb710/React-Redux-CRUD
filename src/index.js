import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import postReducder from './reducers/postReducer';
import { Provider } from 'react-redux';

const store = createStore(postReducder);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'));

module.hot.accept();
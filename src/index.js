import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import postReducer from './reducers/postReducer';
const store = createStore(postReducer, composeWithDevTools(
    applyMiddleware(ReduxPromise),
));
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

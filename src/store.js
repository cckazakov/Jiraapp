
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

import postReducer from './reducers/postReducer';
export default createStore(postReducer, composeWithDevTools(
    applyMiddleware(ReduxPromise),
));


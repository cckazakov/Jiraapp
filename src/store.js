
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/reducers';

export default createStore(
    rootReducer, 
    composeWithDevTools(
    applyMiddleware(ReduxPromise),
));


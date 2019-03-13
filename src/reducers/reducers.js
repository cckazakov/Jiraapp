import { combineReducers } from 'redux'; 

import project from './project';
import post from './post';

export default combineReducers ({
    project,
    post,
});
import { combineReducers } from 'redux'; 

import project from './project';
import epic from './epic';
import version from './version';
import story from './story';
import task from './task';
import subtask from './subtask';
import bug from './bug';
import user from './user';
import backlog from './backlog';
import sprint from './sprint';
import label from './label';
import component from './component';


export default combineReducers ({
    project,
    epic,
    version,
    story,
    task,
    subtask,
    bug,
    user,
    backlog,
    sprint,
    label,
    component
});
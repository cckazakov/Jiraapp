import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Project from '../containers/Project';
import Epic from '../containers/Epic';

const Main = () => (
    <Main>
        <Switch>
            <Route path='/project' component={Project} />
            <Route path='/Epic' component={Epic} />          
        </Switch>
    </Main>
)

export default Main;
import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import AllProject from './containers/AllProject';
import AllEpics from './containers/AllEpic';
import Notfound from './containers/Notfound'
import AllPost from './components/AllPost';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <button>
              <Link to="/projects">projects</Link>
          </button>
          <button>
              <Link to="/epics">epics</Link>
          </button>
          <Switch>
              <Route exact path='/projects' component={AllProject} />
              <Route path='/epics' component={AllEpics} />
              <Route path='/posts' component={AllPost} />
              <Route component={Notfound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
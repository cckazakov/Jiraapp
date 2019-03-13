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
              <Link to="/projects">Projects</Link>
          </button>
          <button>
              <Link to="/epics">Epics</Link>
          </button>
          <button>
              <Link to="/epics">Release/Versions</Link>
          </button>
          <button>
              <Link to="/epics">Stories/User Stories</Link>
          </button>
          <button>
              <Link to="/epics">Tasks</Link>
          </button>
          <button>
              <Link to="/epics">Subtasks</Link>
          </button>
          <button>
              <Link to="/epics">Bugs</Link>
          </button>
          <button>
              <Link to="/epics">Users</Link>
          </button>
          <button>
              <Link to="/epics">Backlog</Link>
          </button>
          <button>
              <Link to="/epics">Sprint</Link>
          </button>
          <button>
              <Link to="/epics">Labels</Link>
          </button>
          <button>
              <Link to="/epics">Components</Link>
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from './Project';
import EditProject from '../components/EditProject';
import CreateProject from '../components/CreateProject';

window.AP.request('/rest/api/2/project')
      .then(data =>alert(data.body))
      .catch(e => alert(e.err));

class AllProject extends Component {
  render() {
    
    return (
      <div className="container">
        <h2>Project</h2>
        {this.props.projects.map((project) => (
          <div key={project.id}>
             {project.editing ? <EditProject project={project} key={project.id} /> : <Project project={project} key={project.id} />}
          </div>
        ))}  
        <CreateProject />     
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.project
  }
}
export default connect(mapStateToProps)(AllProject);

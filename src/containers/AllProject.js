import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from './Project';

class AllProject extends Component {
  render() {
    console.log('allproject',this.props)
    return (
      
      <div className="container">
        <h2>Project</h2>
        {this.props.projects.map((project) => (
          <div key={project.id}>
             <Project project={project} key={project.id} />
          </div>
        ))}       
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

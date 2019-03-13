import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditProject extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newExpand = this.getExpand.value;
    const newSelf = this.getSelf.value;
    const newKey = this.getKey.value;
    const newProjectTypeKey = this.getProjectTypeKey.value;
    const newSimplified = this.getSimplified.value;
    const newStyle = this.getStyle.value;
    const newIsPrivate = this.getIsPrivate.value;
    
    const data = {
        newExpand,
        newSelf,
        newKey,
        newProjectTypeKey,
        newSimplified,
        newStyle,
        newIsPrivate
    }
    this.props.dispatch({ type: 'UPDATE', id: this.props.project.id, data: data })
  }
  render() {
    return (
      <div key={this.props.project.id} className="project">
        <form className="form" onSubmit={this.handleEdit}>
          <input required type="text" ref={(input) => this.getExpand = input}
          defaultValue={this.props.project.expand} placeholder="Enter project expand" /><br /><br />
          <textarea required rows="5" ref={(input) => this.getSelf = input}
          defaultValue={this.props.project.self} cols="28" placeholder="Enter self" /><br /><br />
          <textarea required rows="5" ref={(input) => this.getKey = input}
          defaultValue={this.props.project.key} cols="28" placeholder="Enter key" /><br /><br />
          <textarea required rows="5" ref={(input) => this.getProjectTypeKey = input}
          defaultValue={this.props.project.projectTypeKey} cols="28" placeholder="Enter project type" /><br /><br />
          <textarea required rows="5" ref={(input) => this.getSimplified = input}
          defaultValue={this.props.project.simplified} cols="28" placeholder="Enter Simplified" /><br /><br />
          <textarea required rows="5" ref={(input) => this.getStyle = input}
          defaultValue={this.props.project.style} cols="28" placeholder="Enter project" /><br /><br />
          <textarea required rows="5" ref={(input) => this.getIsPrivate = input}
          defaultValue={this.props.project.isPrivate} cols="28" placeholder="Enter project" /><br /><br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditProject);



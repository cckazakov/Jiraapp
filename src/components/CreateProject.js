import React, { Component } from 'react';
import { connect } from 'react-redux';
class CreateProject extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const expand = this.getExpand.value;
    const self = this.getSelf.value;
    const key = this.getKey.value;
    const projectTypeKey = this.getProjectTypeKey.value;
    const simplified = this.getSimplified.value;
    const style = this.getStyle.value;
    const isPrivate = this.getIsPrivate.value;

    const data = {
      expand,
      self,
      key,
      projectTypeKey,
      simplified,
      style,
      isPrivate,
      editing: false
    }
    console.log('data',data)
    this.props.dispatch({
      type: 'ADD_PROJECT',
      data
    })
    
    this.getExpand.value = '';
    this.getSelf.value = '';
    this.getKey.value = '';
    this.getProjectTypeKey.value = '';
    this.getSimplified.value = '';
    this.getStyle.value = '';
    this.getIsPrivate.value = '';
  }
  render() {
  return (
  <div>
    <h2>Create Project</h2>
    <form className="form" onSubmit={this.handleSubmit} >
    <input required type="text" ref={(input) => this.getExpand = input}
        placeholder="Enter project expand" /><br /><br />
        <textarea required rows="2" ref={(input) => this.getSelf = input}
        cols="28" placeholder="Enter self" /><br /><br />
        <textarea required rows="2" ref={(input) => this.getKey = input}
        placeholder="Enter key" /><br /><br />
        <textarea required rows="2" ref={(input) => this.getProjectTypeKey = input}
        cols="28" placeholder="Enter project type" /><br /><br />
        <textarea required rows="2" ref={(input) => this.getSimplified = input}
        cols="28" placeholder="Enter Simplified" /><br /><br />
        <textarea required rows="2" ref={(input) => this.getStyle = input}
        cols="28" placeholder="Enter project" /><br /><br />
        <textarea required rows="2" ref={(input) => this.getIsPrivate = input}
        cols="28" placeholder="Enter project" /><br /><br />
        <button>Create</button>
    </form>
  </div>
  );
  }
}
export default connect()(CreateProject);

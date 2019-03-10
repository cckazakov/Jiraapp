import React, { Component } from 'react';
import { connect } from 'react-redux';

class Topbar extends Component {
  render() {
    return (
        <div className="navbar">
            <h2 className="center ">Projects</h2>
            <button className = "add">Add</button>
        </div>
    );
  }
}
export default connect()(Topbar);

import React, {Component} from 'react';
import { connect } from 'react-redux';

class Project extends Component {
    render() {
        return (
            <div className="project">
                <p className="project_message">{this.props.project.expand}</p>
                <p className="project_message">{this.props.project.self}</p>
                <p className="project_message">{this.props.project.id}</p>
                <p className="project_message">{this.props.project.key}</p>
                
                <p className="project_message">{this.props.project.projectTypeKey}</p>
                <p className="project_message">{this.props.project.simplified}</p>
                <p className="project_message">{this.props.project.style}</p>
                <p className="project_message">{this.props.project.isPrivate}</p>
                <div className="control-buttons">
                    <button className="edit" onClick={() => this.props.dispatch({type: 'EDIT_PROJECT', id: this.props.project.id })}>Edit</button>
                    <button claseName="delete" onClick={() =>this.props.dispatch({type: 'DELETE_PROJECT', id: this.props.project.id})}>Delete</button>
                </div>
            </div>
        )
    }
}
export default connect()(Project);


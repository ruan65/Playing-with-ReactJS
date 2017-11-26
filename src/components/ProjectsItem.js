import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectsItem extends Component {

  deleteProject(id) {
    // console.log('Test delete: ' + id);
    this.props.onDelete(id)
  }
  render() {
    return (
      <li>
        <strong>{this.props.project.title}</strong>: {this.props.project.category}<span> </span>
        <button href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</button>
      </li>
    );
  }
}

ProjectsItem.propTypes = {
  project: PropTypes.object,
  deleteProject: PropTypes.func
}

export default ProjectsItem;

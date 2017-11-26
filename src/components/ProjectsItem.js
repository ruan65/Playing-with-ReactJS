import React, { Component } from 'react';

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

export default ProjectsItem;

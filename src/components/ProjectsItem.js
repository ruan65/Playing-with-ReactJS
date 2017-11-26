import React, { Component } from 'react';

class ProjectsItem extends Component {
  render() {
    return (
      <li>
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
      </li>
    );
  }
}

export default ProjectsItem;

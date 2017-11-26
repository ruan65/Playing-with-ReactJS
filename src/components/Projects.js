import React, { Component } from 'react';
import ProjectsItem from './ProjectsItem'

class Projects extends Component {
  render() {

    // console.log(this.props);

    let projectsItems;

    if (this.props.projects) {
      projectsItems = this.props.projects.map( project => {
        // console.log(project);

        return <ProjectsItem key={project.title} project={project} />
      });
    }
    return (
      <div className="Projects">
      <h3>Latest Projects</h3>
        {projectsItems}
      </div>
    );
  }
}

export default Projects;

import React, { Component } from 'react';
import ProjectsItem from './ProjectsItem'

class Projects extends Component {

  deleteProject(id) {
    // console.log("delete it: " + id);
    this.props.onDelete(id)

  }

  render() {

    // console.log(this.props);

    let projectsItems;

    if (this.props.projects) {
      projectsItems = this.props.projects.map( project => {
        // console.log(project);

        return <ProjectsItem onDelete={this.deleteProject.bind(this, project.id)} key={project.title} project={project} />
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

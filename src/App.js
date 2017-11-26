import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {

      projects: [

      ]
    }
  }

  componentDidMount() {

      this.setState({projects: [
        {
          id: uuid.v4(),
          title: 'Buisness Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce shopping cart',
          category: 'Web Development'
        }
      ]
      });
  }

  handleAddProject(project) {

    let updatedProjects = this.state.projects;

    updatedProjects.push(project);

    this.setState({projects: updatedProjects});

    console.log(project);
  }

  handleDeleteProject(id) {

    let prs = this.state.projects;

    prs.splice(prs.findIndex(p => p.id === id), 1);

    this.setState({projects: prs});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />

        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

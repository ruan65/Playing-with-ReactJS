import React, { Component } from 'react';
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

  // componentDidMount() {
  //
  //     console.log('Hello state...');
  //
  //     this.setState({projects: [
  //       {
  //         title: 'Buisness Website',
  //         category: 'Web Design'
  //       },
  //       {
  //         title: 'Social App',
  //         category: 'Mobile development'
  //       },
  //       {
  //         title: 'Ecommerce shopping cart',
  //         category: 'Web Development'
  //       }
  //     ]
  //     });
  // }

  handleAddProject(project) {

    let updatedProjects = this.state.projects;

    updatedProjects.push(project);

    this.setState({projects: updatedProjects});

    console.log(project);
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />

        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

class AddProject extends Component {

  constructor() {
    super()

    this.state = {
      newProject: {

      }
    }
  }

  static defaultProps = {
    categories: ['Web Design', 'Mobile development', 'Web Development']
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.refs.title.value === '') {
      alert("Title is required!");
    } else {
      console.log(this.refs.title.value);
      this.setState({ newProject: {
        title: this.refs.title.value,
        category: this.refs.category.value
      }
    }, function() {
      // console.log(this.state);
      this.props.addProject( this.state.newProject );
    })
    }
  }

  render() {

    let categoryOptions = this.props.categories.map(cat => {
      return <option key={cat} value={cat}>{cat}</option>
    })

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title </label><br/>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br/>
            <select ref="category">

              {categoryOptions}

            </select>
          </div>

          <input type='submit' value='Submit it' />
        </form>
      </div>
    );
  }
}

export default AddProject;

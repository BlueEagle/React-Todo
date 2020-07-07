import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  submit = (e) => {
    e.preventDefault()
    this.props.addTask('test')
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" placeholder="type here..."/>
        <button>Add</button>
        <button>Clear checked</button>
      </form>
    )
  }
}

export default TodoForm
// () => {this.props.addTask('test')
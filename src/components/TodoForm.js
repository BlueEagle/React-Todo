import React from 'react'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="type here..."/>
        <button onClick={() => {this.props.addTask('test')}}>Add</button>
        <button>Clear checked</button>
      </form>
    )
  }
}

export default TodoForm
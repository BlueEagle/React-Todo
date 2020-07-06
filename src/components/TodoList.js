import React from 'react'

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {
      todoData: []
    }
  }

  render() {
    return (
      <div>TodoList Rendered</div>
    )
  }
}

export default TodoList
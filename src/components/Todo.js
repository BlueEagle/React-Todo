import React from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>Todo Component displayed</div>
        <TodoList />
        <TodoForm />
      </div>
    )
  }
}

export default Todo
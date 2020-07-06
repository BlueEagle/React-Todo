import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo List:</h1>
        
        {this.props.tasks.map(item => {
          return (
            <Todo toDoItem={item}/>
          )
        })}
      </div>
    )
  }
}

export default TodoList
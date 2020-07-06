import React from 'react'

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  displayTask() {
    if (this.props.toDoItem.completed) return <s>{this.props.toDoItem.task}</s>
    else return this.props.toDoItem.task
  }

  click() {
    debugger
    this.props.toggleCompleted(this.props.toDoItem.id)
  }

  render() {
    return (
      <div 
        onClick={() => this.props.toggleCompleted(this.props.toDoItem.id)}
      >
        {this.displayTask()}
      </div>
    )
  }
}

export default Todo
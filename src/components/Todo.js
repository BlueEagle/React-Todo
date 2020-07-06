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

  render() {
    return (
      <div>
        {this.displayTask()}
        {/* {this.props.toDoItem.task} */}
      </div>
    )
  }
}

export default Todo
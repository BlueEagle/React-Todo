import React from 'react'
import styled from 'styled-components'

class Todo extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  displayTask() {
    if (this.props.toDoItem.completed) return <s><StyledTask>{this.props.toDoItem.task}</StyledTask></s>
    else return <StyledTask>{this.props.toDoItem.task}</StyledTask>
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

const StyledTask = styled.p`
  line-height: .5;
`
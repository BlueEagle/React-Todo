import React from 'react'
import Todo from './Todo'
import styled from 'styled-components'

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <StyledTodoList>
        <h1>Todo List:</h1>

        {
          this.props.tasks.map(task => (
            <Todo toDoItem={task} toggleCompleted={this.props.toggleCompleted}/>
          ))
        }

      </StyledTodoList>
    )
  }
}

export default TodoList

const StyledTodoList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
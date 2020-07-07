import React from 'react'
import styled from 'styled-components'

class TodoForm extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  submit = (e) => {
    e.preventDefault()
    this.props.addTask()
  }
  clear = (e) => {
    e.preventDefault()
    this.props.deleteChecked()
  }
  clearAll = e => {
    e.preventDefault()
    this.props.deleteAll()
  }

  render() {
    return (
      <StyledDiv>
        <StyledForm onSubmit={this.submit}>
          <input type="text" placeholder="type here..." onChange={this.props.textChangeHandler} value={this.props.formValue}/>
          <button type="submit">Add</button>
          <button onClick={this.clear}>Clear checked</button>
          <button onClick={this.clearAll}>Clear all</button>
        </StyledForm>
      </StyledDiv>
    )
  }
}

export default TodoForm

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  * {
    margin: 2rem .5rem;
  }
`
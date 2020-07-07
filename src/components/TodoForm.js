import React from 'react'

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
      <div>
        <form onSubmit={this.submit}>
          <input type="text" placeholder="type here..." onChange={this.props.textChangeHandler} value={this.props.formValue}/>
          <button type="submit">Add</button>
          <button onClick={this.clear}>Clear checked</button>
          <button onClick={this.clearAll}>Clear all</button>
        </form>
        
      </div>
    )
  }
}

export default TodoForm
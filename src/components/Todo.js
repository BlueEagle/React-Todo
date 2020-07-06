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

  // click() {
  //   debugger
  //   this.props.toggleCompleted(this.props.toDoItem.id)
  // }

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

// import React from 'react'

// const Todo = (props) => {
//    function displayTask() {
//      if (props.toDoItem.completed) return <s>{props.toDoItem.task}</s>
//      else return props.toDoItem.task
//    }

//   return (
//     <div 
//       onClick={() => props.toggleCompleted(props.toDoItem.id)}
//     >
//       {displayTask()}
//     </div>
//   )
// }

// export default Todo
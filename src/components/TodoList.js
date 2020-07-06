import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Todo List:</h1>

        {
          this.props.tasks.map(task => (
            <Todo toDoItem={task} toggleCompleted={this.props.toggleCompleted}/>
          ))
        }

      </div>
    )
  }
}

export default TodoList

// import React from 'react'
// import Todo from './Todo'

// const TodoList = (props) => {

//   return (
//     <div>
//       <h1>Todo List:</h1>

//       {
//         props.tasks.map(task => (
//           <Todo toDoItem={task} toggleCompleted={props.toggleCompleted}/>
//         ))
//       }

//     </div>
//   )
// }

// export default TodoList
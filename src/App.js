import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

const initialValues = {
  todoData: [
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ],
  textInputValue: ''
}

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = initialValues
  }

  toggleCompleted = taskId => {
    this.setState({
      ...this.state,
      todoData: this.state.todoData.map(task => {
        if(task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          }
        } else {
          return task
        }
      })
    })
  }
  
  addTask = () => {
    const newTask = {
      task: this.state.textInputValue,
      id: new Date(),
      completed: false
    }

    this.setState({
      ...this.state,
      todoData: [...this.state.todoData, newTask],
      textInputValue: ''
    })
  }

  textChangeHandler = e => {
    this.setState({
      ...this.state,
      textInputValue: e.target.value
    })
  }

  deleteChecked = () => {
    this.setState({
      ...this.state,
      todoData: this.state.todoData.filter(task => !task.completed)
    })
  }

  deleteAll = () => {
    this.setState({
      ...this.state,
      todoData: ['']
    })
  }


  render() {
    return (
      <div>
        <TodoList tasks={this.state.todoData} toggleCompleted={this.toggleCompleted} />
        <TodoForm addTask={this.addTask} textChangeHandler={this.textChangeHandler} formValue={this.state.textInputValue} deleteChecked={this.deleteChecked} deleteAll={this.deleteAll} />
      </div>
    );
  }
}

export default App;

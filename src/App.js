import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
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
      ]
    }
  }

  toggleCompleted(taskId) {
    this.setState({
      // ...this.state,
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

  render() {
    return (
      <div>
        <TodoList tasks={this.state.todoData} toggleCompleted={this.toggleCompleted} />
        <TodoForm />
      </div>
    );
  }
}

export default App;

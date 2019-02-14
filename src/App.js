import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        todos: [],
        inputText: '',
        id: '',
        completed: ''
    }
}

addTask = e => {
  e.preventDefault();

  const newTask = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
  };
console.log(newTask);
  this.setState({
      todos: [...this.state.todos, newTask],
      inputText: '',
      id: '',
      completed: ''
  });
};

handleChanges = e => {
  this.setState({
      inputText: e.target.value
  });
};
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList todos={this.state.todos}/>
        <TodoForm 
        inputText={this.state.inputText}
        addTask={this.addTask}
        handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;

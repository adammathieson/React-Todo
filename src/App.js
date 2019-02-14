import React from 'react';

import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import "./components/TodoComponents/Todo.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
        todos: [],
        // inputText: '',
        // id: '',
        // completed: ''
    }
}

addTask = e => {
  e.preventDefault();

  const newTask = {
      task: this.state.inputText,
      id: Date.now(),
      completed: false
  };

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

toggleTask = todoId => {
  this.setState({
    todos: this.state.todos.map(item => {
      if(todoId === item.id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    })
  });
};

clearTodos = e => {
  e.preventDefault();
  this.setState({
    todos: this.state.todos.filter(item => !item.completed)
  });
};

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList
        todos={this.state.todos}
        toggleTask={this.toggleTask}
        />
        <TodoForm
        inputText={this.state.inputText}
        addTask={this.addTask}
        handleChanges={this.handleChanges}
        clearTodos={this.clearTodos}
        />
      </div>
    );
  }
}

export default App;

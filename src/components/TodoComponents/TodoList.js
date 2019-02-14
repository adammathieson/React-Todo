import React from "react";

import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="todo-list">
            {/* .todos is props for render() in App.js */}
            {props.todos.map(item => <Todo
                todo={item}
                key={item.id}
                toggleTask={props.toggleTask}
            />
            )}
        </div>
    )
}




    



export default TodoList;
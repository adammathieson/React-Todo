import React from "react";

const Todo = props => {
    return (
        <div
        className={`todo-entry${props.todo.completed ? ' completed' : ''}`}
        onClick={() => props.toggleTask(props.todo.id)}
        >
        {/* what is this .todo. referencing? props todo from TodoList.js */}
            <p>{props.todo.task}</p>
        </div>
    )
}

export default Todo;
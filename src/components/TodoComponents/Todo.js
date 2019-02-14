import React from "react";

function Todo(props) {
    return (
        <li className="todo-entry">
            {props.todo.task}
        </li>
    )
}

export default Todo;
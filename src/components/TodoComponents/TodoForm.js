import React from "react";

const TodoForm = props => {
    return (
        <form onSubmit={props.addTask}>
            <input
                type="text"
                value={props.inputText}
                name="todo"
                onChange={props.handleChanges}
                placeholder="...todos"
            />
            <input type="submit" value="Add todo"></input>
            <button type="submit">Clear Completed</button>
        </form>
    )
}

export default TodoForm;
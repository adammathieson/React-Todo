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
            <input 
                type="submit"
                value="Add todo"
                name="submit"
            />
            <input
                type="submit"
                value="Clear Completed"
                name="clear"
            />
        </form>
    )
}

export default TodoForm;
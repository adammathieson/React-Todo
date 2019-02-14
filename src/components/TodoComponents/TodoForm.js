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
            <button
                type="submit"
                value="Add todo"
                name="submit">
                Add Todo
            </button>
            <button 
                type="submit"
                value="Clear Completed"
                name="clear"
                onClick={props.clearTodos}>
                Clear Completed
            </button>
        </form>
    )
}

export default TodoForm;
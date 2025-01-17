import { useState } from "react"


function ToDoInput(props){
    const {handleAddTodos, todoValue, setTodoValue} = props

    return (
        <header>
            <input type="text" value={todoValue} onChange={(e) => setTodoValue(e.target.value)} placeholder="Enter a new todo..."/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add +</button>
        </header>
    )
}

export default ToDoInput
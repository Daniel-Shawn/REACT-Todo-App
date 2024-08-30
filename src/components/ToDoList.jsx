import { ToDoCard } from "./ToDoCard";



export function ToDoList(props){
    let todos = props.todos
    
    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return(
                    <ToDoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </ToDoCard>
                )
            })}
        </ul>
    )
}
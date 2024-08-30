import { useState, useEffect } from 'react';
import ToDoInput from './components/ToDoInput.jsx';
import { ToDoList } from "./components/ToDoList.jsx";


function App() {
  const [todos, setTodos] = useState([
    'Explore the city',
    'Learn a language',
    'Develop react!'
  ])
  const [todoValue, setTodoValue] = useState('')

  function persistData(){
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
    persistData()
  }

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, todoindex) => {
      return todoindex !== index
    })
    setTodos(newTodoList)
    persistData()
  }

  function handleEditTodos(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodos(index)
    persistData()
  }

  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, [])
  

  return (
    <>
      <ToDoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
      <ToDoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos}/>
    </>
  ) 
}

export default App







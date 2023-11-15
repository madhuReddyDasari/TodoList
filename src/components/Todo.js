import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList, {TodoListHeading} from './TodoList'

function Todo() {
    const [todos, setTodos] = useState([])

    const handleSubmit =(todo) => {
        // console.log(todo)
        let val =[...todos, todo]
        // console.log(val)
        setTodos(val)
    }

    const handle_new_todos_change =(new_todos) => {
        setTodos(new_todos)
    }
  return (
    <>
        <TodoForm onSubmit = {handleSubmit}/>
        <TodoListHeading/>
        <TodoList todos={todos} handle_new_todos_change={handle_new_todos_change}></TodoList>
    </>
  )
}

export default Todo
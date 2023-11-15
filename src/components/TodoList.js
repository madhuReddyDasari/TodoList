import React, { useEffect, useState } from 'react'

function TodoList(props) {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        setTodos(props.todos)
    }, [props.todos])

    const handleClick = (todo_new) => {
        let new_todos = todos.map((todo) =>
            todo.id === todo_new.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
        props.handle_new_todos_change(new_todos)
    }

    return (
        todos.map((todo, index) => {
            return (
                <React.Fragment key={index}>
                    <div onClick={() => handleClick(todo)} style={{ display: "flex", justifyContent: "space-around" }}>
                        <h4> {todo.id} </h4>
                        <h4> {todo.value} </h4>
                        <h4> {todo.isCompleted ? "Completed" : "Not Yet"} </h4>
                    </div>
                </React.Fragment>
            )
        })

    )
}
export default TodoList


function TodoListHeading() {
    return (
        <div>
            <h2 style={{ textAlign: "center", color: "green" }}>Todo List Heading</h2>
            <div style={{ display: "flex", justifyContent: "space-around", color: "blue" }}>
                <h4> ID </h4>
                <h4> VALUE </h4>
                <h4> isCompleted </h4>
            </div>
            <hr></hr>
        </div>
    )
}
export { TodoListHeading }


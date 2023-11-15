import React, {useState, useEffect} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState()
    
    useEffect(() => {
        // console.log(input)
    }, [input])
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let todo = {
            id: Math.floor(Math.random()*1000),
            value : input,
            isCompleted : false
        }
        props.onSubmit(todo)
        setInput('')
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
    <div>
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
            type = "text"
            placeholder = "Add Todo"
            value = {input}
            onChange = {handleChange}
            ></input>
            
            <button>Add Todo</button>
        </form>
    </div>
  )
}

export default TodoForm

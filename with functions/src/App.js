import { TodoList } from "./components/TodoList";
import React, {useState, useRef} from 'react'


function App() {
  const inputRef = useRef()

  let [todos, setTodos] = useState([
    {text: '1', index: 0},
    {text: '2', index: 1}
  ])

  const addTodo = (e) => {
     e.preventDefault();
        const input = inputRef.current;

        if (input.value.trim()) {
            todos.forEach(item => item.index++)

            setTodos([{text: input.value, index: 0}, ...todos,])
            input.value = ''
        }
  }

  const onDelete = (index) => {
        todos = todos.filter(elem => elem.index !== index)
        todos.forEach(item => item.index = todos.indexOf(item))
        setTodos([...todos])
    }

    return (
      <>
        <form onSubmit = {addTodo} >
          <input ref = {inputRef} type='text' placeholder='click Enter to add todo' className='input-field' />
          <span className='bar'></span>
        </form>

        <TodoList list = {todos} onDelete = {onDelete} />
      </>
    );
}

export default App;

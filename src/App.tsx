import React, { useState } from 'react';
import { TodoAddForm } from './TodoAddForm';
import { TodoList } from './TodoList';


const initialTodos: Todo[] = [
  {
    text: 'Finish this tutorial',
    complete: false
  },
  {
    text: 'Go to the football match',
    complete: false
  }
]



function App() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = ( selectedTodo ) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && setTodos([...todos, {text: newTodo, complete: false}])
  }



  return (
    <ul>

      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <TodoAddForm addTodo={addTodo}/>

    </ul>
  )
}

export default App;
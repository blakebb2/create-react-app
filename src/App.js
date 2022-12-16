import { type } from '@testing-library/user-event/dist/type';
import React, {useState}  from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(['Todo 1', 'Todo 2'])
  return (
    <div>
    <TodoList />
    <input type="text" id="userInput"/>
    {
      document.getElementById('userInput')?
        setTodos('userInput')
      : console.log('Needs input')
    }
    <button>Add Todo</button>
    <button>Clear completed Todos</button>
    <button>ADD SECRET FEATURE</button>
    <div>0 Left to do</div>
    </div>
  )
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ToDoList } from './components/ToDoList'
import { ToDoContext } from './context'
import { Dashboard } from './components/Dashboard'

function App() {
  const [todos, setTodoes] = useState([
    {id:101, text:"Go for a walk", completed: false},
    {id:102, text:"Read a book", completed: true},
    {id:103, text:"Buy groceries", completed: false},
    {id:104, text:"Call a friend", completed: false},
    {id:105, text:"Clean the house", completed: false},
    {id:106, text:"Cook dinner", completed: false}
]);

const [filtered, setFiltered] = useState(todos);



const addTodo = (todo) => {
  setTodoes([...todos, {...todo, id:todos.length + 1}]);
  setFiltered([...todos, {...todo, id:todos.length + 1}]);
}

const deleteTodo = id => {
  setTodoes(todos.filter(todo => todo.id != id));
  setFiltered(todos.filter(todo => todo.id != id));
}

const handleUpdate = id => {
  setTodoes(todos.map(todo => todo.id != id ? todo : {...todo, completed:!todo.completed}));
  setFiltered(todos.map(todo => todo.id != id ? todo : {...todo, completed:!todo.completed}));
}


const handleFilter = (value) => {
  let filtered;

  if (value === "completed") {
    filtered = todos.filter(todo => todo.completed === true);
    
  } else if (value === "active") {
    filtered = todos.filter(todo => todo.completed === false);
    
  } else {
   
    filtered = todos;
  }
 
  setFiltered(filtered);
}
 

  return (
    <>
      <ToDoContext.Provider value={{todoes:filtered, onAdd:addTodo , onUpdate:handleUpdate, 
        onDelete:deleteTodo, onFilter:handleFilter}}>
        <Dashboard/>
      </ToDoContext.Provider>
    </>
  )
}

export default App

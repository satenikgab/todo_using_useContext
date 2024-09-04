import { useContext, useState } from "react"
import { ToDoContext } from "../context"

export const AddToDo = () => {
    const {onAdd} = useContext(ToDoContext);

    const [todo, setTodo] = useState({
        text:"",
        completed:false
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(todo);
        

    }
    
    
    return <>

    <form onSubmit={ handleSubmit}>
        <input type="text" placeholder="describe todo" value = {todo.text} 
        onChange={event => setTodo({...todo, text:event.target.value})} />
        <button>save</button>
    </form>
    
    </>
}
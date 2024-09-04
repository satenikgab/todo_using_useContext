import { useContext, useState } from "react"
import { ToDoContext } from "../context";

export const ToDoFilter = () => {

    const [filter, setFilter] = useState("all");

    const {onFilter} = useContext(ToDoContext);

    const handleChange = (event) => {
        const newFilter = event.target.value;
        setFilter(newFilter);
        onFilter(newFilter);
       
    }


    return <div>
     <select value={filter} onChange={handleChange}>
        <option value="all" >all</option>
        <option value="completed">completed</option>
        <option value="active">active</option>
     </select>
    

    </div>
}
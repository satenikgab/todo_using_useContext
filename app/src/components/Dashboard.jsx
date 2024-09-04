import { AddToDo } from "./AddToDo"
import { ToDoFilter } from "./ToDoFilter"
import { ToDoList } from "./ToDoList"

export const Dashboard = () => {
    return <>

    <ToDoList/>
    <AddToDo/>
    <ToDoFilter/>
    </>
}
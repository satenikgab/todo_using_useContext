import { useContext, useState } from "react"
import { ToDoContext } from "../context"
import { ToDoItem } from "./ToDoItem";

export const ToDoList = () => {
    const {todoes, onUpdate, onDelete} = useContext(ToDoContext);


    return <>
    {
        todoes.map(todo => <ToDoItem key={todo.id} todo = {todo} onUpdate = {onUpdate} onDelete={ onDelete}/>)
    }
    

    </>
}
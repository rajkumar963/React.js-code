import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {
    let [Todos, setTodos] = useState([{task:"Study", id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task:newTodo, id:uuidv4()}];
        })
        setNewTodo("");
    }

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
        // console.log(event.target.value);
    }

    return (    
        <div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue} /><br /> <br />
            <button onClick={addNewTask} >Add Task</button>
            <br /> <br />
            <hr />
            <h3>Tasks Todo</h3>
            <ul>
                {
                    Todos.map((todo)=>(
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>{setTodos((prevTodos)=>prevTodos.filter((t)=>t.id!==todo.id))}}>Delete</button>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./TodoList.css";


export default function TodoList() {
let styles = {


    
}

    let [Todos, setTodos] = useState([{task:"Study", id:uuidv4(),isDone:false}]);
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

    let markAllDone=(event)=>{
       setTodos((prevTodos)=> prevTodos.map((todo)=>{
            return {
                ...todo, isDone:!todo.isDone
            };
        })
    )}
    
    let markAsDone=(id)=>{
        setTodos((prevTodos)=>{
            return prevTodos.map((todo)=>{
                if(todo.id===id){
                    return {...todo, isDone:!todo.isDone};
                }
                return todo;
            })
        })
    }

    return (    
        <div className="TodoList">
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue} /><br /> <br />
            <button onClick={addNewTask} >Add Task</button>
            <br /> <br />
            <hr />
            <h3>Tasks Todo</h3>
            <ul>
                {
                    Todos.map((todo)=>(
                    <li key={todo.id} className="todo" >
                        <span style={todo.isDone ? {color:"green"} : {color:"red"}}>{todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>{setTodos((prevTodos)=>prevTodos.filter((t)=>t.id!==todo.id))}}>Delete</button> &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button> &nbsp;&nbsp;&nbsp;
                        
                    </li>
                ))
                }
            </ul>
            <br /><hr />
            <button onClick={markAllDone}>Mark All</button>
        </div>
    )
}
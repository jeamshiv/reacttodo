import React from 'react';
import TodoItem from "./TodoItem";

export default function Todos(props) {
    return (
        <div className="container col-lg-8 mb-5 pb-5">
            <h3 className="text-center pt-5 text-info">Todos List</h3>
            {props.todos.length===0? 
            <div className="my-4 alert alert-primary fade show mb-5" role="alert">
            <strong>Empty Todos!</strong> No Todos to show Please Add.
          </div>
            :
            props.todos.map((todo)=>{
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
            }
        </div>
    )
}

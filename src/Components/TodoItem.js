import React from 'react'

export default function TodoItem({todo, onDelete}) {
    return (
        <div className="col-lg-10 offset-lg-1 pb-5">
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-warning" onClick={()=>{onDelete(todo)}}>Delete</button>
            <hr/>
        </div>
    )
}

import React, { useState } from 'react';

export default function AddTodo(props) {


    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{

        e.preventDefault();
        if(!title || !desc){
            alert("Require Title or Description");
        } else{
        props.addTodo(title, desc)
        setTitle("");
        setDesc("");
        }
    }


    return (
        <div className="col-lg-6 offset-lg-3 col-sm-10 text-center mt-4">

                <form onSubmit={submit}>
                    <div className="form-group">
                        <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" placeholder="Todo Item" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} id="desc" placeholder="Description" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add New</button>
                </form>

            </div>
    )
}

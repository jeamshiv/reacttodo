import './App.css';
import Header from './Components/Header';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';

function App() {
  

  const onDelete = (todo)=>{
    console.log("Delete kar raha hu", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.getItem("todos");
  }

  const addTodo = (title, desc)=>{
    let sno;
    if(todos.length==0){
      sno = 1;
    } else{
      sno = todos[todos.length-1].sno+1;
    }
    
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);


    if(localStorage.getItem("todos")){
      localStorage.setItem("todos", todos);
    }
    
  }
  
    
 const [todos, setTodos] = useState([]);
  


  return (
    <div className="App">
      <Header title="Shiv ToDo"/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;

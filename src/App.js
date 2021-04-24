import './App.css';
import Header from './Components/Header';
import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/About';
import Contact from './Components/Contact';
import Page404 from './Components/Page404';

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
    if(todos.length===0){
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
    <>
   <Router>
    <Header title="Shiv ToDo"/>
    <Switch>

      <Route exact path="/" render={() =>{
        return (
          <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete} />
          </>
        )
      }}>
      </Route>


      <Route path="/reacttodo" render={() =>{
        return (
          <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete} />
          </>
        )
      }}>
      </Route>
      

    <Route exact path="/about">
      <About />
    </Route>

    <Route exact path="/contact">
      <Contact />
    </Route>

    <Route component={Page404} />
      
    </Switch>
    <Footer />
    </Router>
    </>
  );
}

export default App;

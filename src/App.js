import "./App.css";
import { useState } from "react";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList"

function App() {
  const[ListTodo,setListTodo] =useState([])

  const addTodo =(newTodo)=> {setListTodo([...ListTodo,newTodo])}
  const handleTodo =(value)=>  {
      setListTodo(ListTodo.filter((el)=> el !== value))
     }
  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo} />
        <TodoList todos={ListTodo} handleTodo={handleTodo}/>
      </header>
    </div>
  );
}

export default App;

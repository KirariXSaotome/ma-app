import React from 'react';
import './App.css';
import Counter from './Componets/Counter/Counter';
import MyName from "./Componets/MyName/MyName";
import ToDoList from "./Componets/ToDoList/ToDoList";



function App() {
  return (
    <div className="App">
    <ToDoList/>
        {/*<Counter/>*/}

    </div>
  );
}

export default App;

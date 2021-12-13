import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import './App.css';

const LOCAL_STORAGE_KEY = 'to-do-list'

function App() {
  const [toDos, setToDos] = useState([]);

  const addToDo = (toDo) => {
    setToDos([...toDos, toDo]);
  }

  const removeToDo = (id) => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  }

  const toggleComplete = (id) => {
    setToDos(
      toDos.map(toDo => {
        if(toDo.id === id) {
          return {
            ...toDo,
            completed: !toDo.completed
          }
        }
        return toDo;
      })
    );
  }

  useEffect(() => {
    setToDos(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(toDos));
  }, [toDos])
  return (
    <div className="App">
      <Navbar />
      <ToDoForm addToDo={addToDo} />
      <ToDoList toDos={toDos} removeToDo={removeToDo} toggleComplete={toggleComplete} />
    </div>
  );
}

export default App;

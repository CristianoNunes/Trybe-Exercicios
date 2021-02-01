import React from 'react';
import './App.css';

const tarefas = ["Acordar", "Tomar café", "Escovar os dentes", "Ir trabalhar"];

function App() {
  return (
    <ul>
      { tarefas.map(tarefa => <li>{ tarefa }</li>) }
    </ul>
  );
}

export default App;

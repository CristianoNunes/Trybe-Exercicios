import React from 'react';
import './App.css';

function handleClick() {
  console.log('Clicou no botão 1')
}

function App() {
  return (
    <button onClick={handleClick}>Meu botão</button>
  );
}

export default App;

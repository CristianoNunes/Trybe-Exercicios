import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';


function App() {
  return (
    <Pokedex pokemons={pokemons} />
  );
}

export default App;

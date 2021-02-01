import React, { Component } from 'react'
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    const pokemons = this.props.pokemons;
    return (
      <div className="main">
        <h1>Pokedex</h1>
        <div className="pokedex">
          {pokemons.map((pokemon) =>
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        )}  
      </div>
      </div>
    );
  }
}

export default Pokedex;
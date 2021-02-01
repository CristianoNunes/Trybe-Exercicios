import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ClientesCadastrados extends Component {
  render() {
    return (
      <div>
        <h2>Clientes Cadastrados</h2>
        <p>Nenhum cliente cadastrado</p>
        <div>
          <Link to='/Cadastro'>
            <button>Cadastro</button>
          </Link>
        </div> 
      </div>
    )
  }
}

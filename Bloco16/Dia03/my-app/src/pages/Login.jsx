import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
        <div>
          <label for="email">
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label for="Password">
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <Link to='/ClientesCadastrados'>
            <button>Entrar</button>
          </Link>
        </div>     
      </div>
    )
  }
}

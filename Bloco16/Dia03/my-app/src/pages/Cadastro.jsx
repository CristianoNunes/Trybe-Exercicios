import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCliente } from '../actions';

class Cadastro extends Component {
  render() {
    const { addCliente } = this.props;
    return (
      <div>
        <div>
          <label for="nome">
            Nome:
            <input type="text" name="nome" />
          </label>
        </div>
        <div>
          <label for="idade">
            Idade:
            <input type="text" name="idade" />
          </label>
        </div>
        <div>
          <label for="email">
            Email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <Link to='/ClientesCadastrados'>
            <button onClick={addCliente()}>Cadastrar</button>
          </Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  add: e => dispatch(addCliente(e))});

export default connect(null, mapDispatchToProps)(Cadastro);
import React, { Component } from 'react'

export default class Form extends Component {
  constructor(){
    super()
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      curriculo: '',
      cargo: '',
      descricaoCargo: '',
    }
  }

  

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  // handleClick() {
  //   const divConsolidado = target.
  // }

  render() {
    return (
      <div>
      <form>
        <div>
          <fieldset>
            <div>
            <label>
              Nome: 
              <input name="nome" type="text" maxLength="40" required onChange={this.handleChange}></input>
            </label>
            </div>
            <div>
              <label>
                Email:
                <input name="email" type="email"  maxLength="50" required onChange={this.handleChange}></input>
              </label>
            </div>
            <div>
              <label>
                CPF:
                <input name="cpf" cpf="" type="text" maxlength="11" required onChange={this.handleChange}></input>
              </label>
            </div>
            <div>
              <label>
                Endereço:
                <input name="endereco" type="text" maxLength="200" required onChange={this.handleChange}></input>
              </label>
            </div>
            <div>
              <label>
                Cidade:
                <input name="cidade" type="text" maxLength="28" required onChange={this.handleChange}></input>
              </label>
            </div>
            <div>
              <label>Estado:
                <select name="estado" value={this.state.estado} onChange={this.handleChange}>
                  <option value="RN">RN</option>
                  <option value="PB">PB</option>
                  <option value="CE">CE</option>
                  <option value="PE">PE</option>
                </select>
              </label>
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label>
                Resumo de Currículo:
                <input name="curriculo" type="textarea"  maxLength="1000" required onChange={this.handleChange}></input>
              </label>
            </div>
            <div>
              <label>
                Cargo:
                <input name="cargo" type="text" maxLength="40" onChange={this.handleChange}></input>
              </label>
            </div>
            <div>
              <label>
                Descrição do Cargo:
                <input name="descricaoCargo" type="text" maxLength="500" onChange={this.handleChange}></input>
              </label>
            </div>
          </fieldset>
          <button type="submit">Montar Consolidado</button>
          <button type="reset">Limpar</button>
        </div>
      </form>
      <div className="consolidado">
        <h2>Consolidados</h2>
        <span>{this.state.nome}</span>
        <span>{this.state.email}</span>
        <span>{this.state.cpf}</span>
        <span>{this.state.endereco}</span>
        <span>{this.state.cidade}</span>
        <span>{this.state.estado}</span>
        <span>{this.state.curriculo}</span>
        <span>{this.state.cargo}</span>
        <span>{this.state.descricaoCargo}</span>
      </div>
      </div>
    )
  }
}

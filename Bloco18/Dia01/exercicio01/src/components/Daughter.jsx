import React, { Component } from 'react'
import MyContext from '../ContextApi/MyContext'

export default class Daughter extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {
          value => (
            <div>
              <h4>Filha</h4>
              <p>{`Eu tenho ${value.money} para gastar`}</p>
              <button onClick={value.spendMoney}>PEDIR IFOOD</button>
            </div>
          )
        }
      </MyContext.Consumer>
    )
  }
}

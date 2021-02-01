import React, { Component } from 'react';
import MyContext from '../ContextApi/MyContext';
import Grandmother from './Grandmother';

export default class GreatGrandfather extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      money: 1000000,
    }
    this.spendMoney = this.spendMoney.bind(this);
  }

  spendMoney() {
    this.setState((prevState) => (
      { money: prevState.money - 1000 }
    ));
  }

  render() {
    
    const contextValue ={
      money: this.state.money,
      spendMoney: this.spendMoney,
    }

    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <h1>Bisavó</h1>
          <Grandmother />
        </div>
      </MyContext.Provider>
    )
  }
}

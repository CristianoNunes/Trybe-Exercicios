import React, { Component } from 'react'
import Daughter from './Daughter'

export default class Father extends Component {
  render() {
    return (
      <div>
        <h3>Pai</h3>
        <Daughter />
      </div>
    )
  }
}

import React, { Component } from 'react';
import Father from './Father';

export default class Grandmother extends Component {
  render() {
    return (
      <div>
        <h2>Avó</h2>
        <Father />
      </div>
    )
  }
}

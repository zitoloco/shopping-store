import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <h1>Cart Page</h1>
        <Link to='/'>Main</Link>
      </div>
    )
  }
}

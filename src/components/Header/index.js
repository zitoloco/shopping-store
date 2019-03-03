import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartCounter from '../CartCounter';
export default class Header extends Component {
  render() {
    return (
      <div>
          <Link to='/'>Main</Link>
          <h1>Header</h1>
          <Link to='/cart'>Cart</Link>
          <CartCounter />
      </div>
    )
  }
}
 
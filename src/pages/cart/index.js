import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Cart Page</h1>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
export default class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Main Page</h1>
      </div>
    )
  }
}
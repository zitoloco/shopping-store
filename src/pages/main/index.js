import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Products from '../../components/Products'

const productList = require('../../../products.json');
export default class Main extends Component {
  
  render() {
    return (
      <div>
        <Products products={productList.products} />
      </div>
    )
  }
}

  
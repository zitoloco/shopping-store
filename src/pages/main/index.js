import React, { Component } from 'react';
import Products from '../../components/Products'
import { connect } from 'react-redux';
import { Store } from '../../store';

const productList = require('../../../products.json');      //dont know if this is a good option...

Store.dispatch({type:'ADD_INITIAL_ITEMS', payload: productList.products})
class Main extends Component {

  render() {
    return (
      <div>
        <Products products={this.props.productItems} />
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
      productItems: state.productsReducer
    }
  }

export default connect (mapStateToProps)(Main);
import React, { Component } from 'react'
import CartProducts from '../../components/CartProducts'
import { connect } from 'react-redux';


class Cart extends Component {

  render() {
    return (
      <div>
        <CartProducts products={this.props.cartItems} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartReducer
  }
}

export default connect (mapStateToProps)(Cart)
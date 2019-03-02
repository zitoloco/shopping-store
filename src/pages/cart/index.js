import React, { Component } from 'react'
import { connect } from 'react-redux';
import CartProducts from '../../components/CartProducts'


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
    cartItems: state.cartItems
  }
}

export default connect (mapStateToProps)(Cart)
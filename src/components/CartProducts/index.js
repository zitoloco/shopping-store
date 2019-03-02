import React, { Component } from 'react'
import { connect } from 'react-redux';

class CartProducts extends Component {

  renderProducts = (products) => {
    return products.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.name}</p>
          <button onClick={() => this.props.removeItemFromCart(item)}>Remove from Cart</button>
          <hr></hr>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderProducts(this.props.products)}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: product => dispatch({type: 'REMOVE_FROM_CART', payload: product})
  }
}

export default connect (null, mapDispatchToProps)(CartProducts)

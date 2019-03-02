import React, { Component } from 'react'
import { connect } from 'react-redux';

class Products extends Component {

  renderProducts = (products) => {
    return products.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.name}</p>
          <button onClick={() => this.props.addItemToCart(item)}>Add to Cart</button>
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
    addItemToCart: product => dispatch({type: 'ADD_TO_CART', payload: product})
  }
}

export default connect (null, mapDispatchToProps)(Products)

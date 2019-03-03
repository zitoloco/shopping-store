import React, { Component } from 'react'
import { connect } from 'react-redux'; 

class CartCounter extends Component {

  render() {
    return (
      <div>
        {this.props.cartItems.length}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      cartItems: state.cartReducer
    }
}

export default connect(mapStateToProps)(CartCounter)

import React, { Component } from 'react'
import { ProductConsumer } from '../../context'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'
import CartList from './CartList'
import CartTotals from './CartTotals'


export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            if (!value.cart.length) {
              return (
                <EmptyCart />
              )
            } else {
              return (
                <React.Fragment>
                  <div className="container mt-3">
                    <Title name="your" title="cart" />
                    <CartColumns />
                    <CartList value={value} />
                    <CartTotals value={value} history={this.props.history} />
                  </div>
                </React.Fragment>
              )
            }
          }}
        </ProductConsumer>
      </section>
    )
  }
}

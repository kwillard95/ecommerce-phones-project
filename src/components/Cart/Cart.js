import React, { Component } from 'react'
import { ProductConsumer } from '../../context'
import Title from '../Title'
import CartColumns from './CartColumns'
import EmptyCart from './EmptyCart'


export default class Cart extends Component {
  render() {
    return (

      <ProductConsumer>
        {(value) => {
          if (!value.cart.length) {
            return (
              <section>
                <EmptyCart />
              </section>
            )
          } else {
            return (
              <section>
                <Title name="your" title="cart" />
                <CartColumns />
              </section>
            )
          }
        }}
      </ProductConsumer>

    )
  }
}

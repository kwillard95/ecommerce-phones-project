import React from 'react'
import { Link } from 'react-router-dom'
import PayPalButton from './PayPalButton'


export default function CartTotals({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;

  return (
    <React.Fragment>
      <div className="container my-3">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <div>
            <Link to="/products">
            <button className="btn btn-outline-primary text-uppercase px-4"
                type="button">back to products</button>
            </Link>

            </div>
            <Link to="/products">
              <button className="btn btn-outline-danger text-uppercase my-2 px-5 mb-4"
                type="button"
                onClick={() => clearCart()}>clear cart</button>
            </Link>
            <h5>
              <span className="text-title">
                subtotal :
              </span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">
                tax :
              </span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">
                total :
              </span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <PayPalButton total={cartTotal} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

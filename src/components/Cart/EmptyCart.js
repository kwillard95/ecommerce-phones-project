import React from 'react'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto text-center text-title">
          <h1>your cart is currently empty</h1>
          <Link to="/products">
            <button className="btn btn-outline-primary text-uppercase px-4"
                type="button">view products</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

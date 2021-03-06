import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './Button'

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { id, img, price, info, title, inCart } = value.detailProduct;
          return (
            <div className="container py-5 overflow-hidden">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted my-3">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end of title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6">
                  <div className="detail-img mx-auto">
                  <img src={img} alt="product" className="h-100" style={{borderRadius: '5px'}}/>
                  </div>
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6">
                  <h2 className="dt-experience text-capitalize">experience : {title}</h2>
                  <h4 className="dt-price text-blue">
                    <strong className="text-capitalize">price : ${price}</strong>
                  </h4>
                  <p className="dt-more text-capitalize font-weight-bold mt-2 mb-0">more about this virtual experience:</p>
                  <p className="dt-more-info text-muted lead">{info}</p>
                  {/* buttons */}
                  <div className="dt-buttons">
                    <Link to='/products'>
                      <ButtonContainer>
                        back to products
                      </ButtonContainer>
                    </Link>
                    <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                      {inCart ? 'in cart' : 'add to cart'}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}

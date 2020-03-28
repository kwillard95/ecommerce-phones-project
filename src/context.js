import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext();
//Provider - provides info to our entire application
//Consumer - whenever we want to use the info that the provider provides, we use the consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: []
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      products = [...products, singleItem]
    })
    this.setState(() => {
      return {products: products}
    })
  }

  getItem = (id) => {
    const item = this.state.products.find(product => product.id === id);
    return item;
  }

  handleDetail = (id) => {
    const item = this.getItem(id);
    this.setState(() => {
      return {detailProduct: item}
    })
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(() => {
      return {
      products: tempProducts,
      cart: [...this.state.cart, product]}
    })
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }

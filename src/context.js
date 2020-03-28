import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext = React.createContext();
//Provider - provides info to our entire application
//Consumer - whenever we want to use the info that the provider provides, we use the consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
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
    }, () => {
      this.addTotals();
    })
  }

  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true
      }
    })
  }

  closeModal = () => {
    this.setState(() => {
      return {modalOpen: false}
    })
  }

  increment = (id) => {
    const tempCart = [...this.state.cart];
    const cartIndex = tempCart.indexOf(this.getItem(id));
    const cartItem = tempCart[cartIndex];
    
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;

    this.setState(() => {
      return {cart: tempCart}
    }, () => {
      this.addTotals();
    })
  }

  decrement = (id) => {
    const tempCart = [...this.state.cart];
    const cartIndex = tempCart.indexOf(this.getItem(id));
    const cartItem = tempCart[cartIndex];
    cartItem.count--;

    if (cartItem.count === 0) {
      this.removeItem(id);
    } else {
      cartItem.total = cartItem.count * cartItem.price;
  
      this.setState(() => {
        return {cart: tempCart}
      }, () => {
        this.addTotals();
      })
    }
  }

  removeItem = (id) => {
    const tempProducts = [...this.state.products];
    const tempCart = this.state.cart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = false;
    product.count = 0;
    product.total = 0;

    this.setState(() => {
      return {
        cart: [...tempCart], 
        products: [...tempProducts]}
    }, () => {
      this.addTotals();
    })
  }

  clearCart = () => {
    this.setState(() => {
      return {cart: []}
    }, () => {
      this.setProducts();
      this.addTotals();
    })
  }

  addTotals = () => {
    let subTotal = this.state.cart.reduce((acc, item) => {
      return acc += item.total
    }, 0);
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(3));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    })
  }



  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
        {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }

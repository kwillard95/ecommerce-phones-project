import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import styled from 'styled-components'
import {ButtonContainer} from './Button';


export default class Navbar extends Component {
  render() {
    return (
      <div class="menu-wrap">
          <input type="checkbox" class="toggler"></input>
          <div class="hamburger"><div></div></div>
          <div class="menu">
            <div>
              <div>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/products">Products</Link></li>
                  <li><Link to="/cart">Cart</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      // <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      //   {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
      //    Creative Commons (Attribution 3.0 Unported);
      //    https://www.iconfinder.com/Makoto_msk */}
      //    <Link to='/'>
      //      <img src={logo} alt="store" className="navbar-brand"/>
      //    </Link>
      //    <ul className="navbar-nav align-items-center">
      //      <li className="nav-item ml-5">
      //        <Link to='/products' className="nav-link">
      //          products
      //        </Link>
      //      </li>
      //    </ul>
      //    <Link to='/cart' className='ml-auto'>
      //      <ButtonContainer>
      //        <span className='mr-2'>
      //        <i className="fas fa-cart-plus"></i>
      //        </span>
      //         my cart
      //      </ButtonContainer>
      //    </Link>
      // </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`



import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = {
    isOpen: false
  }

  toggleMenu = (e) => {
    console.log(this.state.isOpen)
    this.setState(() => {
      return { isOpen: !this.state.isOpen }
    }, () => {
      document.getElementById('checkbox').checked = this.state.isOpen;
    })
  }

  render() {
    return (
      <div className="menu-wrap">
        <input type="checkbox" id="checkbox" className="toggler" onClick={this.toggleMenu}></input>
        <div className="hamburger"><div></div></div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li><Link to="/" onClick={this.toggleMenu}>Home</Link></li>
                <li><Link to="/products" onClick={this.toggleMenu}>Products</Link></li>
                <li><Link to="/cart" onClick={this.toggleMenu}>Cart</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      )
  }
}




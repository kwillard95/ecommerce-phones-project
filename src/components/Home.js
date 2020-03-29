import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <div class="menu-wrap">
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
        </div> */}
        <header id="showcase">
          <div class="container showcase-container">
            <h1>Welcome</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi eum inventore eius ratione officiis nihil quae facilis totam fuga architecto!</p>
          </div>
        </header>
      </React.Fragment>
    )
  }
}


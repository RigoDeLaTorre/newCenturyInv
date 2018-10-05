import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      active: false
    }
  }
  toggleClass = () => {
    this.setState({
      active: !this.state.active
    });
  }
  render() {
    return (<section id="nav-section">

    {/*display block when it hits 768px for mobile/tablets */}
      <div className="nav-phones showPhones">
        <div className="nav-phone-container">
          <div className="nav-small-icon" onClick={this.toggleClass}></div>
          <a href="tel:562-843-7515">
            <div className="phone-icon"></div>
          </a>
          <a href="mailto:norente@yahoo.com?Subject=Hello%20Zoila" target="_top">
            <div className="email-icon"></div>
          </a>
        </div>
        <div className={`menu-links ${this.state.active? 'show-menu-links': ''}`}>
          <li>
            <Link to="/" onClick={this.toggleClass}>Home</Link>
          </li>
          <li>
            <Link to="/selling" onClick={this.toggleClass}>Sell My Home</Link>
          </li>
          <li>
            <Link to="/buying" onClick={this.toggleClass}>Buy a Home</Link>
          </li>
          <li>
            <Link to="/listings" onClick={this.toggleClass}>Listings</Link>
          </li>
          <li>
            <Link to="/mortgagecalculator" onClick={this.toggleClass}>Mortgage Calculator</Link>
          </li>
          <li>
            <Link to="/contact" onClick={this.toggleClass}>Contact</Link>
          </li>
        </div>
      </div>

        {/*Displays this nav up until 768px wheer it goes to display none */}
      <nav className="nav">
        <ul>
          <li className="logo">
            <Link to="/">New Century Investment Realty</Link>
          </li>
            <li>
              <a className="phone-nav" href="tel:562-843-7515">Zoila Moscoso : Call Now 562-843-7515</a>
            </li>
        </ul>
        <ul>
          <li>
            <Link to="/selling">Sell My Home</Link>
          </li>
          <li>
            <Link to="/buying">Buy a Home</Link>
          </li>
          <li>
            <Link to="/listings">Listings</Link>
          </li>
          <li>
            <Link to="/mortgagecalculator">Mortgage Calculator</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </section>)
  }
}

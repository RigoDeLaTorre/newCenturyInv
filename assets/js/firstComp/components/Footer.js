import React from 'react'
import FormSend from './Form.js'

const Footer = () => {
  return (<div id="footer">
    <div className="top-section">
      <div className="contact-text">
        <h1>get in touch</h1>
        <p>I have worked with plenty of first-time homebuyers and I can guide you in a way that you will understand without overwhelming you in the simple process of owning your first home !
        </p>
      </div>
      <div className="contact-details">
        <h4 className="myName">Zoila Moscoso</h4>
        <a href="mailto:norente@yahoo.com?Subject=Hello%20Zoila" target="_top">
          <h4><img src="./img/contact.svg" width="25px" height="25px"/>norente@yahoo.com</h4>
        </a>
        <a href="tel:562-843-7515">
          <h4><img src="./img/smartphone.svg" width="25px" height="25px"/>562-843-7515</h4>
        </a>
        <h4><img src="./img/map.svg" width="25px" height="25px"/>12223 Highland Ave #366,</h4>
        <h4>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Rancho Cucamonga, CA 91739</h4>
        <h4><img src="./img/idCard.svg" width="25px" height="25px"/>BRE #01027217</h4>
      </div>
      <div className="form-section">
        < FormSend/>
      </div>
    </div>
    <div className="bottom-section">
      <div className="footer-items">
        <div className="item item-1">
          <h1>About</h1>
          <p>With over 25 years of experience in the Residential & Commercial real estate industry, I will help you find the best investment opportunities - from homes, to apartments, to commercial property.
          </p>

        </div>
        <div className="item item2">
          <h1>Servicing</h1>
          <p>The greater los angeles area. Including the counties :
            <span>Los Angeles, Riverside, Orange, San Bernardino, Inland Empire</span>
          </p>
        </div>
        <div className="item item3">

          <img src="./img/facebook2.svg" width="50px" height="50px"/>
          <img src="./img/instagram2.svg" width="50px" height="50px"/>
          <img src="./img/linked2.svg" width="50px" height="50px"/>
        </div>
      </div>
      <div className="links-section">
        <ul>
          <li>
            <a href='#header'>Home</a>
          </li>
          <li>
            <a href='#SellingHome'>Sell My Home</a>
          </li>
          <li>
            <a href='#BuyingHome'>Buy a Home</a>
          </li>
          <li>
            <a href='#mortgage-calculator'>Mortgage Calculator</a>
          </li>
          <li>
            <a href='#footer'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </div>)
}

export default Footer;

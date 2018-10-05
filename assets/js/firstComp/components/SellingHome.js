import React from 'react';
import {Link} from 'react-router-dom'

const SellingHome = () => {
  return (<div id="SellingHome">
    <div className="selling-container">
      <div className="left-side"></div>
      <div className="right-side">
        <div className="right-container">
          <h1>Selling Your Home</h1>
          <p>You want to maximize your equity. A little can go a long way when trying get the most out of your property.
            <br/>
            <br/>It can go from as little as re-arranging furniture in a more symmetrical pattern to painting the interior with neutral colors. I will guide you to see what is worth doing to maximize your investment.</p>
          <Link to="/contact" className="sell-button">Contact</Link>
        </div>
      </div>
    </div>
  </div>)
}

export default SellingHome;

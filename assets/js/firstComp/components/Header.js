import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      // active: false
    }
  }
  // toggleClass = () => {
  //   const currentState = this.state.active;
  //   this.setState({
  //     active: !currentState
  //   });
  // }
  render() {
    return (<div id="header">
      <div className="header-container">
        <div className="main-content-left">
          <h1>Take your first step to a better home today.</h1>
          <h3>Let us take the stress out of selling your home</h3>
          <h3 className="spanish-speaking">Hablo Espanol</h3>
          <a href='#main-contact'>
            <div className="longArrow"></div>
          </a>
        </div>

        <div className="main-content-right" id="main-contact">
          <form action="https://formspree.io/norente@yahoo.com" method="POST" className="home-valuation">
            <h3>Get your Free Home Valuation</h3>
            <div className="inputName">
              <input type="text" name="name" placeholder="Enter your name" required="required"/>
              <span>STEP 1</span>
            </div>
            <div className="inputName">
              <input type="text" name="phone" placeholder="Enter your contact number" required="required"/>
              <span>STEP 2</span>
            </div>
            <div className="inputName">
              <input type="text" name="address" placeholder="Enter your home address"/>
              <span>STEP 3</span>
            </div>
            <input type="hidden" name="_next" value="//www.zoilamoscoso.com"/>
            <input type="submit" value="Get your free valuation" className="submit-button"/>
          </form>
        </div>
      </div>
    </div>)
  }
}

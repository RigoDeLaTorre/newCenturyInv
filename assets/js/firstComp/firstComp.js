import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import listingsData from './listingsdata/data.js'
import Nav from './components/Nav.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import BuyingHome from './components/BuyingHome.js'
import SellingHome from './components/SellingHome.js'
import FormSend from './components/Form.js'
import MortgageCalculator from './mortgageCalculator/MortgageCalculator.js'
import Listings from './components/Listings.js'
import ListingItem from './components/ListingItem.js'

 class Layout extends Component {
   constructor () {
  super()
  this.state = {
    listingsData,
    listing:''
  }
}

handleListing = (item) =>{
  this.setState({
    listing:item
  })
}
render(){
  return (<BrowserRouter>
      <div>
        <Nav />
        <Route path = "/selling" component={SellingHome} />
        <Route path = "/buying" component={BuyingHome} />
        <Route
            path ='/listingItem'
            render ={(props) =><ListingItem {...props} listingItem={this.state.listing}/>} />
        <Route
            path ='/listings'
            render ={(props) =><Listings {...props} listingsData={this.state.listingsData} handleListing={this.handleListing}/>} />
        <Route path = "/mortgagecalculator" component={MortgageCalculator} />
        <Route path = "/contact" component={Footer} />
        <Route exact path = "/" component={Header} />
      </div>
    </BrowserRouter> )
}

}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)

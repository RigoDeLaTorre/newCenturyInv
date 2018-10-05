import React, { Component} from 'react'
import ReactDOM from 'react-dom'



export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      mainImage:'./img/listing/1.jpg'
        }
    }

    getDetails = (item) => {
      this.props.handleListing(item)
    this.props.history.push('listingItem');
        };
        
showAllImages = ()=>{
  return this.props.listingsData.map((item,i) =>{
    return(
      <div key={i} className="listing-group">
        <img src ={item.images[0]} onClick={()=>this.getDetails(item)}/>
        <div className="property-address">
          <h4>{item.address}</h4>
          <h4>{item.city}, {item.state} {item.zip}</h4>
        </div>
        <div className="home-details">
          <div className="group-details">
            <h4>Bedrooms : {item.bedrooms}</h4>
            <h4>Bathrooms : {item.bathrooms}</h4>
            <h4>Sqft : {item.sqft}</h4>
            <h4>Levels : {item.levels}</h4>
          </div>
          <div className="group-details">
            <h4>Type : {item.type}</h4>
            <h4>Garage : {item.garage}</h4>
            <h4>LotSize : {item.lotSize}</h4>
            <h4>Year Built : {item.yearBuilt}</h4>
          </div>
        </div>
      </div>
    )
  })
}

  render () {
return(
  <div id="listings">
      <div className="group-listings">
      {this.showAllImages()}
      </div>

  </div>
  )
  }
}

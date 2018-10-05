import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class ListingItem extends Component {
  constructor () {
    super()
    this.state = {
      mainImage:''
        }
    }

componentWillMount(){
  this.setState({
    mainImage:this.props.listingItem.images[0]
  })
}
    showAllImages = ()=>{
      return this.props.listingItem.images.map((image,i) =>{
        return(
          <div key={i} className="other-images">
            <img src ={image} onClick={this.changeImage}/>
          </div>
        )
      })
    }

changeImage = (e)=>{this.setState({mainImage:e.target.src})}

showNextImage = (e)=>{
  if(this.props.listingItem.images.indexOf(this.state.mainImage)>21){
  }else{
    let currentImages = this.props.listingItem.images;
    let mainImage = this.state.mainImage;
    let theIndex =currentImages.indexOf(mainImage);
    let pic = currentImages[theIndex+1];
        this.setState({
          mainImage:pic
        })
      }
}

showPrevImage = (e)=>{
  if(this.props.listingItem.images.indexOf(this.state.mainImage)<1){
  }else{
    let currentImages = this.props.listingItem.images;
    let mainImage = this.state.mainImage;
    let theIndex =currentImages.indexOf(mainImage);
    let pic = currentImages[theIndex-1];
        this.setState({
          mainImage:pic
        })
  }
}


  render () {
      return(
        <div id="listingItem">
        <div className = "listings-container">
          <section className="left-info-section">
            <div className="contact-details">
              <h1>New Century Investment Realty</h1>
              <h2>Zoila Moscoso</h2>
              <h4><a href="tel:562-843-7515">Phone: 562-843-7515</a></h4>
              <h4><a href="mailto:norente@yahoo.com?Subject=Hello%20Zoila" target="_top">Email: norente@yahoo.com</a></h4>
            </div>
            <div className="property-address">
              <h4>{this.props.listingItem.address}</h4>
              <h4>{this.props.listingItem.city}, {this.props.listingItem.state} {this.props.listingItem.zip}</h4>
            </div>

            <div className="home-details">
              <div className="group-details">
                <h4>Bedrooms : {this.props.listingItem.bedrooms}</h4>
                <h4>Bathrooms : {this.props.listingItem.bathrooms}</h4>
                <h4>Sqft : {this.props.listingItem.sqft}</h4>
                <h4>Levels : {this.props.listingItem.levels}</h4>
              </div>
              <div className="group-details">
                <h4>Type : {this.props.listingItem.type}</h4>
                <h4>Garage : {this.props.listingItem.garage}</h4>
                <h4>LotSize : {this.props.listingItem.lotSize}</h4>
                <h4>Year Built : {this.props.listingItem.yearBuilt}</h4>
              </div>

            </div>
            <div className="description">
              <p>Very lovely home made it for a big family, has a 3 car garage with overhead storage shelves, automatic sprinkler front and backyard, new water heater installed in January 2016, new garage motor on the two car garage door. The master bathroom has a new tile flooring and new sink on the kitchen.  </p>
              <p>This home it's well located near by the 10, 15, 60 and the 210 freeways for easy commuting options and Ontario Airport. Near by Ontario mills shopping center and Victoria Gardens. Single door entry with tile flooring and carpet, open concept kitchen with a breakfast nook and large eat at center island and a generous family room. This house is inside of a private community that offers a safety playgrounds and parks along with a 24/7 security guard</p>
            </div>
          </section>
          <section className="right-image-section">
              <div className="main-image">
                <div className="image-container">
                  <div className="arrow-right" onClick = {this.showNextImage}><span>></span></div>
                  <div className="arrow-left" onClick ={this.showPrevImage}>
                    <span>
                    &lt;
                    </span>
                  </div>
                  <img src ={this.state.mainImage} />
                  <div className="details">
                    <span>${this.props.listingItem.salePrice}</span>
                    <div className="address">
                      <span>{this.props.listingItem.address}</span><br />
                      <div className="details-more">
                        <div className="group"><span>{this.props.listingItem.bedrooms}</span><img src="./img/bed.svg" /></div>
                        <div className="group"><span>{this.props.listingItem.bathrooms}</span><img src="./img/bathtub.svg" /></div>
                        <div className="group"><span>{this.props.listingItem.sqft}</span><img src="./img/square.svg" /></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            <div className = "option-images">{this.showAllImages()}</div>
            </section>
          </div>
        </div>
        )
  }
}

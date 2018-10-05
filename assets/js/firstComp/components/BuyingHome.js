import React from 'react'

const BuyingHome = () => {
  return (<div id="BuyingHome">
    <h1>First-time Homebuyers</h1>
    <h5>Dont overcomplicate it for yourself,
      <span>3 easy steps</span>
    </h5>
    <div className="buyHomeContainer">
      <div className="box box1">
        <div className="box-image box-image1"></div>
        <h2>1. Find an Agent</h2>
        <p>Public sites do not have up-to-date listings and you will find many homes already in escrow/under contract or simply unavailable.
        </p>
      </div>
      <div className="box box2">
        <div className="box-image box-image2"></div>
        <h2>2. Get pre-approval letter from bank</h2>
        <p>{"Don't have one ?.. thats okay. I have several trustworthy mortgage loan specialist that I have worked with over the years."}</p>
      </div>
      <div className="box box3">
        <div className="box-image box-image3"></div>
        <h2>3. Find a Home</h2>
        <p>
          This is where you let us take care of finding you a home based on the criteria that you provide.</p>
      </div>
    </div>
  </div>)

}

export default BuyingHome;

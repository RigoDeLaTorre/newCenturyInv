import React from 'react'

const FormSend = () => {

  return (<form action="https://formspree.io/norente@yahoo.com" method="POST" className="home-valuation">
    <h3>Send a Message</h3>
    <div className="inputName">
      <input type="text" name="name" placeholder="Enter your name" required="required"/>
      <span>Name:</span>
    </div>
    <div className="inputName">
      <input type="text" name="phone" placeholder="Enter your contact number" required="required"/>
      <span>Phone:</span>
    </div>
    <div className="inputName">
      <textarea name="comment" placeholder="Enter your message" rows="8" cols="500"></textarea>
      <span>Message:</span>
    </div>
    <input type="hidden" name="_next" value="//www.zoilamoscoso.com"/>
    <input type="submit" value="Send" className="submit-button"/>
  </form>)
}

export default FormSend;

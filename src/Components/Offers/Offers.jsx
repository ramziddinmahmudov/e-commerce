import React from 'react'
import './Offers.css'
import exclusive_image from '../Asset/All_colours.0.jpg'
const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="button1">Check now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" className="rrr"/>
      </div>
    </div>
  )
}

export default Offers

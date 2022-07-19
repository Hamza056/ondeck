import React from 'react'
import './Footer.css';
import Netflix from '../../Assets/Netflix Logo.svg';
import Shopify from '../../Assets/Shopify Logo.svg';
import Spotify from '../../Assets/Spotify Logo.svg';
import Walmart from '../../Assets/Walmart Logo.svg';
const Footer = () => {
  return (
    <div className='footer-container'>
        <p>Trusted by 3+ million people at companies like</p>
        <div className="logo-f">
            <img src={Netflix} alt="" />
            <img src={Shopify} alt="" />
            <img src={Spotify} alt="" />
            <img src={Walmart} alt="" />
        </div>
    </div>
  )
}

export default Footer
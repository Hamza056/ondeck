import React from 'react'
import './Hero.css';
import Heroimg from '../../Assets/Hero Image.png';
import Capterra from '../../Assets/Capterra Logo.svg';
import AlternativeTo from '../../Assets/AlternativeTo Logo.svg';
const Hero = () => {
  return (
    <div className="hero-container">
        <div className="left-h">
            <h1 >Ondeck is your remote <span>conference calling tool</span></h1>
            <p>Ondeck is service that allows you to create beautiful, online and encrypted video calls for you and your remote team</p>
            <button className='btn-green'>Try for free</button>
            <p>5.0 Rating based on review from <span>
                <img src={Capterra} alt="" /></span> <span><img src={AlternativeTo} alt="" /></span> <span></span></p>
        </div>
        <div className="right-h">
            <img src={Heroimg} alt="" width={300}/>
        </div>
    </div>
  )
}

export default Hero
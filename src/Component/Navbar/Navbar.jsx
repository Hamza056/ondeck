import React, { useState } from 'react'
import './Navbar.css';
import Logo from '../../Assets/Logo.svg';
import Spense_icon from '../../Assets/Spense_Icon.svg';
import Fiber_icon from '../../Assets/Fiber_Icon.svg';
import Gradie_icon from '../../Assets/Gradie_Icon.svg';
import Close from '../../Assets/Close.svg';
import Menu from '../../Assets/Menu.svg';
const Navbar = () => {
    const[toggle,setToggle]=useState(false)
    const togglehandel=()=>{
        setToggle(!toggle)
    }
   
  return (
    <div>
        <div className="nav-contain">
            <div className="nav-logo">
            <img src={Logo} alt="" />
            </div>
           
                <ul>
                    <li onClick={togglehandel}>Products
                      
                    </li>
                    <li>Challenges</li>
                    <li>Resources</li>
                    <li>other Links</li>
                </ul>
                {toggle? <div  className="product-contain">
                            <div onClick={()=>setToggle(!toggle)}   className="close">
                                <img  src={Close} alt="" />
                            </div>
                            <div className="product">
                                <div className="product-img">
                                    <img src={Spense_icon} alt="" />
                                </div>
                                <div className="product-info">
                                    <h1>Spense</h1>
                                    <p>Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts</p>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-img">
                                    <img src={Fiber_icon} alt="" />
                                </div>
                                <div className="product-info">
                                    <h1>Fiber Landing Page</h1>
                                    <p>An online portfolio generator Great to practice flex/grid layouts and absolute positioning</p>
                                </div>
                            </div>
                            <div className="product">
                                <div className="product-img">
                                    <img src={Gradie_icon} alt="" />
                                </div>
                                <div className="product-info">
                                    <h1>Gradie Sign Up Page</h1>
                                    <p>Gradie is a simple sign up page great to practice centering layouts</p>
                                </div>
                            </div>
                        </div>:null}
               <div className="btn-group">
                <button>sighn in</button>
                <button className='btn-green'>Try for free</button>
               </div>
               <img className='menu' onClick={togglehandel} src={Menu} alt="" />
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import facebook_icon from '../../assets/facebook_icon.png'
import linkedin_icon from '../../assets/linkedin_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={logo} alt="" />
            <p>We are a web hosting provider on a mission to bring success to everyone who goes online. We do it by constantly improving delicious food, and making the best experience.</p>
            <div className="footer-social-icons">
                <img src={facebook_icon} alt="" />
                <img src={linkedin_icon} alt="" />
                <img src={twitter_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>HOME</li>
                <li>DELIVERY</li>
                <li>ABOUT US</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-53535-56422</li>
                    <li>contact@Tomato.com</li>
                </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer

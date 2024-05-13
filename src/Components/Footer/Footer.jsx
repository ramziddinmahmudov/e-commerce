import React from 'react'
import './Footer.css'
import footer_logo from '../Asset/icon.jpg'
import instagram_icon from '../Asset/instagram_icon.png'
import pintester_icon from '../Asset/pintester_icon.png'
import whatsapp_icon from '../Asset/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" className="kom"/>
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
          <div className="footer-icons-container">
              <a href="https://www.pinterest.com/" target="_blank"> <img src={instagram_icon} alt=""/></a>
          </div>
          <div className="footer-icons-container">
              <a href="https://www.instagram.com/" target='_blank'> <img src={pintester_icon} alt=""/></a>
          </div>
          <div className="footer-icons-container">
              <a href="https://www.whatsapp.com/?lang=ru_RU" target="_blank"><img src={whatsapp_icon} alt=""/></a>
          </div>
      </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - ALL Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer

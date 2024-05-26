import React from 'react'
import './Footer.css'
import footer_logo from '../Asset/Screenshot_14-5-2024_10186_.jpeg'
import instagram_icon from '../Asset/instagram_icon.png'
import pintester_icon from '../Asset/pintester_icon.png'
import whatsapp_icon from '../Asset/whatsapp_icon.png'
import {Link, NavLink} from 'react-router-dom'
import  { useContext, useRef, useState } from "react";

const Footer = () => {
  const [menu, setmenu] = useState("shop");
  const menuRef = useRef();

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" className="kom1"/>
      </div>
      <ul className="footer-links">
        <NavLink to="/company"><li ref={menuRef}>Company</li></NavLink>
        <NavLink to="/office"><li ref={menuRef}>Office</li></NavLink>
        <NavLink to="/"><li ref={menuRef}>Shop</li></NavLink>
        {menu === "shop" ? <hr /> : <></>}
        <NavLink to="/contact"><li ref={menuRef}>Contact</li></NavLink>
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
            <p>Copyright @ 2024 - Ramziddin_Mahmudov</p>
        </div>
    </div>
  )
}

export default Footer

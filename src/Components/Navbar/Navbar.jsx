import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import './App.css'
import Dark from "./pp.png"
import logo from "../Asset/phone-svgrepo-com.svg";
import cart_icon from "../Asset/cart_icon.png";
import logo_burger from '../Asset/menu-burger-horizontal-svgrepo-com.svg'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Asset/drp_down.png";

const Navbar = ({darkmode,handleDarkMode,authenticated, user,onLogout }) => {
  const [menu, setmenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const [showDropdown, setShowDropdown] = useState(false);
  
  
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo" onClick={() => {setmenu("shop")}}>
        <Link to="/"><img src={logo} alt="" className="kom" /></Link>
        {menu === "shop" ? <hr /> : <></>}
        <p>Mobile Shop</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <li
          onClick={() => {
            setmenu("shop");
          }}
          className="li1"
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("samsung");
          }}
          className="li1"
        >
          <Link style={{ textDecoration: "none" }} to="/samsung">
            Samsung
          </Link>
          {menu === "samsung" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("iphone");
          }}
          className="li1"
        >
          <Link style={{ textDecoration: "none" }} to="/iphone">
            Iphone
          </Link>
          {menu === "iphone" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setmenu("nokia");
          }}
          className="li1"
        >
          <Link style={{ textDecoration: "none" }} to="/nokia">
            Nokia
          </Link>
          {menu === "nokia" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      <img src={Dark} alt=""  className="btnnnn" onClick={handleDarkMode}/>
      {authenticated && (
        <div className="navbar-user">
          <button className="user-button" onClick={toggleDropdown}>A</button>
          {showDropdown && (
            <div className="dropdown-menu">
              <span>Name: {user.username}</span>
              <span>Email: {user.email}</span>
              <span>Password: {user.password}</span>
              <button className="logout-button" onClick={onLogout}>Logout</button>
            </div>
          )}
        </div>
      )}

      <img src={logo_burger} alt="" className="logo_burger" onClick={toggleMenu}/>
    </div>
  );
};

export default Navbar;

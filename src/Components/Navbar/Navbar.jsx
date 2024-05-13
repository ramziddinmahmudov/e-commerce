import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import './App.css'
import Dark from "./pp.png"
import logo from "../Asset/icon.jpg";
import cart_icon from "../Asset/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Asset/drp_down.png";
import { UserButton } from "@clerk/clerk-react";

const Navbar = ({darkmode,handleDarkMode}) => {
  const [menu, setmenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" className="kom" />
        <h1>Mobile Shop</h1>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onClick={() => {
            setmenu("shop");
          }}
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
      <UserButton />
    </div>
  );
};

export default Navbar;

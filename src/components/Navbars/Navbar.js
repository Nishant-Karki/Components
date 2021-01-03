import React from 'react';
import logo from './logo.png';
import * as FaIcons from "react-icons/fa";
import "./Navbar.scss";

function Navbar() {
  return (
    <div>
      <header>
      <div className="hdr">
        <img src={logo} className="logo" />
        <div >
          <ul>
            <li className="dropdown">
              <a href="#">Home page</a>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </li>
            <li><a href="#">Theme features</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Men</a></li>
          </ul>
        </div>
        <div className="icons">
          <a><FaIcons.FaSearch /></a>
          <a><FaIcons.FaHeart /></a>
          <a><FaIcons.FaCartPlus /></a>
        </div>
      </div>
      </header>

      <div className="navbar2">
        <img src={logo} className="logo" />
        <div className="navlink">
          <ul>
            <li className="dropdown">
              <a href="#">Home page</a>
            </li>
            <li><a href="#">Theme features</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Men</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

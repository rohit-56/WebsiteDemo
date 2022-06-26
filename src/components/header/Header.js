import React from "react";
import logo from "../../images/hexaviewLogo.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="setLogo" src={logo} alt="logo" />
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/service">Service</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;

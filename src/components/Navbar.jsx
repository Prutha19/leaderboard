import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FaBell, FaWallet, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </div>

   
      <div className="navbar-right">

        <FaWallet className="icon" title="Wallet" />
              <FaBell className="icon" title="Notifications" />
        <FaUserCircle className="icon" title="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { FaHome, FaTrophy, FaGamepad, FaUsers, FaWallet, FaUser } from 'react-icons/fa';
import './Bottomnav.css';

const Bottomnav = () => {
  const navItems = [
    { icon: <FaHome />, label: 'Home' },
    { icon: <FaTrophy />, label: 'Tournaments' },
    { icon: <FaGamepad />, label: 'Games' },
    { icon: <FaUsers />, label: 'Community' },
    { icon: <FaWallet />, label: 'Wallet' },
    { icon: <FaUser />, label: 'Profile' },
  ];

  return (
    <div className="bottomnav-container">
      {navItems.map((item, index) => (
        <div className="bottomnav-item" key={index}>
          {item.icon}
          <span className="label">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Bottomnav;

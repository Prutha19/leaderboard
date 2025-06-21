
import React from 'react';
import './Tabs.css';

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs-container">
      <button
        className={`tab-btn ${activeTab === 'Coins' ? 'active' : ''}`}
        onClick={() => setActiveTab('Coins')}
      >
        Coins
      </button>
      <button
        className={`tab-btn ${activeTab === 'Winnings' ? 'active' : ''}`}
        onClick={() => setActiveTab('Winnings')}
      >
        Winnings
      </button>
      <button
        className={`tab-btn ${activeTab === 'Followers' ? 'active' : ''}`}
        onClick={() => setActiveTab('Followers')}
      >
        Followers
      </button>
    </div>
  );
};

export default Tabs;

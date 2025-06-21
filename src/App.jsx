import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Podium from './components/Podium';
import LeaderboardList from './components/Leaderlist';
import Bottomnav from './components/Bottomnav';
import { BrowserRouter } from 'react-router-dom';
import { users } from './data';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState("Coins");

  // Sort users based on tab
  let sortedUsers = [];

  if (activeTab === 'Coins') {
    sortedUsers = [...users]
      .filter(user => user.type === 'coin')
      .sort((a, b) => b.coins - a.coins);
  } else if (activeTab === 'Winnings') {
    sortedUsers = [...users]
      .filter(user => user.type === 'cash')
      .sort((a, b) => b.winnings - a.winnings);
  } else if (activeTab === 'Followers') {
    sortedUsers = [...users]
      .map(user => ({ ...user, followers: user.followers || 0 }))
      .sort((a, b) => b.followers - a.followers);
  }

  // Top 10 users
  const top10 = sortedUsers.slice(0, 10);
  const top3 = top10.slice(0, 3);
  const rest = top10.slice(3, 10);

  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(to right, #1565C0, #0D47A1, #0A2472)',
          color: 'white'
        }}
      >
        <Navbar />

        <main style={{ flex: 1, paddingBottom: '60px' }}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <h2
              style={{
                color: "#FFD700",
                fontSize: "1.5rem",
                fontWeight: 500,
                fontFamily: "'Poppins', sans-serif",
                paddingBottom: "4px",
                letterSpacing: "1px",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Leaderboard
            </h2>
          </div>

          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <Podium topUsers={top3} activeTab={activeTab} />
          <LeaderboardList users={rest} activeTab={activeTab} />
        </main>

        <Bottomnav />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import './Leaderlist.css';
import { FaUser } from 'react-icons/fa';

const LeaderboardList = ({ users, activeTab }) => {
  return (
    <div className="leaderboard-wrapper">
      <div className="leaderboard-container">
        {users.map((user, index) => (
          <div className="leaderboard-user" key={index}>
            <div className="user-left">
              <div className="rank-number">{index + 4}</div>

              {user.avatar ? (
                <img src={user.avatar} alt={user.name} className="avatar" />
              ) : (
                <FaUser className="user-icon" />
              )}

              <div className="username">{user.name}</div>
            </div>

            {/* ✅ Show followers only in Followers tab */}
            <div className="score">
              {activeTab === 'Followers'
                ? `${user.followers || 0} Followers`
                : `${user.score}+`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardList;

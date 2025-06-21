import React from 'react';
import { FaUser } from 'react-icons/fa';
import './Podium.css';

const Podium = ({ topUsers, activeTab }) => {
  if (!topUsers || topUsers.length < 3) return null;
  const [first, second, third] = topUsers;

  const renderUser = (user, rank, position) => (
    <div className={`podium-rank ${rank}`} key={user.name}>
      <div className="avatar-wrapper">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} className="avatar" />
        ) : (
          <div className="default-avatar">
            <FaUser className="user-icon" />
          </div>
        )}
      </div>
      <div className="name">{user.name}</div>

      {/* ✅ Show followers only in Followers tab */}
      <div className="score">
        {activeTab === 'Followers'
          ? `${user.followers || 0} Followers`
          : `${user.score}+`}
      </div>

      <div className="position">{position}</div>
    </div>
  );

  return (
    <div className="podium-container">
      <div className="podium-wrapper">
        {renderUser(second, 'second', '2')}
        {renderUser(first, 'first', '1')}
        {renderUser(third, 'third', '3')}
      </div>
    </div>
  );
};

export default Podium;

import React from 'react';
import './Followerslist.css';

const FollowersList = ({ topFollowers }) => {
  return (
    <div className="followers-container">
      {topFollowers.map((user, index) => (
        <div className="follower-user" key={user.id}>
          <div className="user-left">
            <span className="rank-number">{index + 1}</span>
            <img src={user.avatar} alt={user.name} className="avatar" />
            <span className="username">{user.name}</span>
          </div>
          <span className="follower-count">{user.followers} Followers</span>
        </div>
      ))}
    </div>
  );
};

export default FollowersList;

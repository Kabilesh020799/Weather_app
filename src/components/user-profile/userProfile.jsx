import React from "react";
import './style.scss';

const UserProfile = (props) => {
  const {
    name,
    email,
    picture,
  } = props;

  return (
    <div className="user-profile">
      <div className="user-profile-pic">
        <img src={picture} alt="" className="user-profile-pic-img" />
      </div>
      <div className="user-profile-info">
        <div className="user-profile-info-name">
          <span>Name: </span>
          <span>{name}</span>
        </div>
        <div className="user-profile-info-email">
          <span>Email: </span>
          <span>{email}</span>
        </div>
      </div>
    </div>
  )
};

export default UserProfile;

import React from "react";
import classes from './style.module.css';

const UserProfile = (props) => {
  const {
    name,
    email,
    picture,
  } = props;

  return (
    <div className={classes.user_profile}>
      <div className={classes.user_profile_pic}>
        <img src={picture} alt="logo" className={classes.user_profile_pic_img} />
      </div>
      <div className={classes.user_profile_info}>
        <div className={classes.user_profile_info_name}>
          <span>Name: </span>
          <span>{name}</span>
        </div>
        <div className={classes.user_profile_info_email}>
          <span>Email: </span>
          <span>{email}</span>
        </div>
      </div>
    </div>
  )
};

export default UserProfile;

import React from "react";
import classes from './style.module.css';
import routes from "../../router/routesInfo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.navbar}>
      {routes?.map((route) => (
        <div onClick={() => navigate(route?.route)}>{route?.route?.split('-')?.join(" ")}</div>
      ))}
    </div>
  )
};

export default Navbar;

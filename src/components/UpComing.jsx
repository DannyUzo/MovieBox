import React from "react";
import Logo from "../assets/tv.png";

import { NavLink } from "react-router-dom";

function UpComing() {
  return (
    <div className="UpComing">
      <div className="sidenav">
        <div className="logo">
          <img src={Logo} alt="TV_logo" />
          Movie Box
        </div>
        <NavLink to="/">
          <i class="fi fi-ts-house-chimney"></i><p>Home</p>
        </NavLink>
        <NavLink to="/moviepage">
          <i class="fi fi-ts-camera-movie"></i><p>Movie</p>
        </NavLink>
        <NavLink to="/TVseries">
          <i class="fi fi-rr-screen"></i><p>TV series</p>
        </NavLink>
        <NavLink to="/UpComing">
          <i class="fi fi-ts-calendar-clock"></i><p>UpComing</p>
        </NavLink>
        <div className="box">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
        </div>
        <div className="logout">log out</div>
      </div>
      <div className="main">
        <h1>Upcoming</h1>
      </div>
    </div>
  );
}

export default UpComing;

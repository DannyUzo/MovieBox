import React from "react";
import Logo from "../assets/tv.png";

import { NavLink } from "react-router-dom";

function TVseries() {
  return (
    <div className="TvSeries">
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
          <p>Play movie quizes and earn free tickets</p>
          <sub>50k people are playing now</sub>
          <div className="small">Start playing</div>
        </div>
        <div className="logout">log out</div>
      </div>
      <div className="main">
        <h1>TVseries</h1>
      </div>
    </div>
  );
}

export default TVseries;

import React from "react";
import Logo from "../assets/tv.png";
import idm from "../assets/idm.png";
import tom from "../assets/tomato.png";
import MovieSection from "./MovieSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="landing-page">
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="TV_logo" />
            Movie Box
          </div>
          <div className="search-box">
            <input type="search" placeholder="What do you want to watch?" />
            <i class="fi fi-rr-search"></i>
          </div>
          <div className="menu">
            Sign in
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.59998 8.40001C3.59998 7.73727 4.13723 7.20001 4.79998 7.20001H19.2C19.8627 7.20001 20.4 7.73727 20.4 8.40001C20.4 9.06275 19.8627 9.60001 19.2 9.60001H4.79998C4.13723 9.60001 3.59998 9.06275 3.59998 8.40001Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.59998 15.6C3.59998 14.9373 4.13723 14.4 4.79998 14.4H19.2C19.8627 14.4 20.4 14.9373 20.4 15.6C20.4 16.2628 19.8627 16.8 19.2 16.8H4.79998C4.13723 16.8 3.59998 16.2628 3.59998 15.6Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className="DescriptionBox">
          <h2>John Wick 3: Parabellum</h2>
          <div className="span">
            <img src={idm} alt="" /> 86/100
            <img src={tom} alt="" /> 90%
          </div>
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
          <div className="watchTrailer-btn">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                fill="white"
              />
            </svg>
            WATCH TRAILER
          </div>
        </div>
      </div>
      <MovieSection />
      <Footer />
    </div>
  );
};

export default Home;

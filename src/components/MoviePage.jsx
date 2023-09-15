import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "../assets/tv.png";
import star from "../assets/Star.png";
import ticket from "../assets/TwoTickets.png";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

const MoviePage = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  const [movieDetails, setMovieDetails] = useState({});

  const [movieList, setMovieList] = useState({});

  const getMovie = () => {
    fetch(
      ` https://api.themoviedb.org/3/movie/${id}?api_key=1531706ed5bf5a8e8a3b13173747c6f9`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json))
      .then(() => setLoading(false))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getMovie();
  }, [id]);


const getDetails = () =>{

  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTMxNzA2ZWQ1YmY1YThlOGEzYjEzMTczNzQ3YzZmOSIsInN1YiI6IjY0ZmViOTUxZmZjOWRlMGVlMDBjOGU2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PYxcTUWLaLT60Smjqev8NTeXqQxKNFRkaPicJAr_DRU'
  }
  };
  
  fetch(url, options)
  .then(res => res.json())
  .then((json) => setMovieDetails(json))
  .catch(err => console.error('error:' + err));
}


useEffect(()=>{
  getDetails();
},[]);
 
console.log(movieDetails);


  return (
    <div className="moviepage">
      <div className="sidenav">
        <div className="logo">
          <img src={Logo} alt="TV_logo" />
          Movie Box
        </div>
        <NavLink to="/">
          <i class="fi fi-ts-house-chimney"></i><p>Home</p>
        </NavLink>
        <NavLink>
          <i class="fi fi-ts-camera-movie"></i><p>Movie</p> 
        </NavLink>
        <NavLink to="/TVseries">
          <i class="fi fi-rr-screen"></i> <p>TV series</p>
        </NavLink>
        <NavLink to="/UpComing">
          <i class="fi fi-ts-calendar-clock"></i><p>Upcoming</p>
        </NavLink>
        <div className="box">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nobis
        </div>
        <div className="logout">log out</div>
      </div>
      <div className="main">

        <div className="video">
          {loading && <Loader />}

          <img
            data-testid="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movieList.backdrop_path}`}
            alt="movie poster"
          />
        </div>
        <div className="wrapper">
          <div className="infoBox">
          
          <div className="title">
            <h3 data-testid="movie-title">{movieList.original_title}
            </h3>{" "}
            {/* <sub>{movieDetails.production_countries[0].iso_3166_1}</sub> */}
        <p data-testid='movie-release-date'>{movieList.release_date}</p>
        <p data-testid='movie-runtime'>{movieDetails.runtime}minutes</p>
        <span>Genres</span>
          </div>
          <p data-testid='movie-overview'>{movieList.overview}</p>
          <div className="director">
            Director: <span></span>
          </div>
          <div className="writer">
            Writers: <span></span>
          </div>
          <div className="stars">
            Stars: <span></span>
          </div>
          <div className="awards">
            <div className="box4">Top rated movie #65</div>
            <select>
              <option value="">Awards for 9 nominations</option>
              <option value="">AMVCA</option>
              <option value="">Oscars</option>
              <option value="">Kids choice award</option>
              <option value="">Others</option>
            </select>
          </div>
          </div>

          {/* ))} */}
            <div className="moreShows">
              <div className="star">
                <img src={star} alt="" />
                <span>8.5</span>| 350k
              </div>
              <div className="box1">
                <img src={ticket} alt="" />
                See Showtimes
              </div>
              <div className="box2">
                <i class="fi fi-rr-list"></i>More watch options
              </div>
              <div className="box3"></div>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default MoviePage;

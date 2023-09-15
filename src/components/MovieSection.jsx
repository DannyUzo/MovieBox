import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Zoom } from 'react-awesome-reveal';
import Loader from './Loader';



import idm from "../assets/idm.png";
import tom from "../assets/tomato.png";




// https://api.themoviedb.org/3/movie/top_rated
const MovieSection = () => {
   
const [loading, setLoading] = useState(true);


const [movieList, setMovieList] = useState([]);

 const getMovie = ()=>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=1531706ed5bf5a8e8a3b13173747c6f9")
    .then(res => res.json())
    .then(json => setMovieList(json.results.slice(0,10)))
    .then(()=> setLoading(false))
    .catch(err =>console.error(err));
 }

useEffect(()=>{
getMovie()
},[])

console.log(movieList)
    return( 
        <div className='movie'>
        <h1>Featured Movie</h1>
    <div className='movieSection'>
    {loading &&( <Loader/>)}
{movieList.map((movie)=>(
  <>
    <Zoom triggerOnce>
        <NavLink to={`/${movie.id}`}>
        <div className='card' data-testid='movie-card' key={movie.id}>
        <i class="fi fi-ss-heart"></i>
         <img data-testid='movie-poster' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt='movie poster' />
         <sub data-testid='movie-release-date'>{movie.release_date}</sub>
         <p data-testid='movie-title'>{movie.original_title}</p>
         <div className="span">
            <img src={idm} alt="" /> 86/100
            <img src={tom} alt="" /> 90%
          </div>
          <sub>Action and adventure</sub>
        </div>
</NavLink>
</Zoom>
  </>
))}
    </div>
    </div>
    );
}


export default MovieSection;
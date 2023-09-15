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
          <div className="header">
             <h1>Featured Movie</h1>
             <h3>See all 
             <svg
              width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4.66668L13.3333 10.5L7.5 16.3333" stroke="#B91C1C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             </svg></h3> 
          </div>

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
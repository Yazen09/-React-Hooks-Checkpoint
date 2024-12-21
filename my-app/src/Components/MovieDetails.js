import React from 'react'
import { useParams, Link } from "react-router-dom";
import { moviesData } from './Data';

const MovieDetails = () => {
    const { id } = useParams();
    const movie = moviesData.find((movie)=>movie.id == parseInt(id))

    if(!movie) {
        return <h2>Movie not found !</h2>;
    }

  return (
    <div className='movie-details'>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <iframe
        width= "560"
        height= "315"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
        ></iframe>
        <br/>
        <Link to ="/">
        <button>back to home </button>
        
        </Link>
      
    </div>
  );
};

export default MovieDetails

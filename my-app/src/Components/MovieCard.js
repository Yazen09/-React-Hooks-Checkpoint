import React from "react";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ title, rate, description, posterUrl, trailer }) => {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {/* Étoiles affichant la note */}
      <ReactStars
        count={5}
        size={20}
        activeColor="#ffd700"
        value={rate}
        edit={false} // Les étoiles ne sont pas éditables ici
      />
      <a href={trailer} target="_blank" rel="noopener noreferrer">
        Watch Trailer
      </a>
    </div>
  );
};

export default MovieCard;

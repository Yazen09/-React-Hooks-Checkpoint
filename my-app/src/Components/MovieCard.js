import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const MovieCard = ({ id, title, rate, description, posterUrl }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`} style={{ textDecoration: "none", color: "black" }}>
        <img src={posterUrl} alt={title} />
        <h3>{title}</h3>
        <ReactStars count={5} size={20} value={rate} edit={false} activeColor="#ffd700" />
      </Link>
    </div>
  );
};

export default MovieCard;

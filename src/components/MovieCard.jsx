import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
    </Link>
  );
}

export default MovieCard;

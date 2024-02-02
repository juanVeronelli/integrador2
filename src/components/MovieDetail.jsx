import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetail.css';

const mockMovies = [
  { id: 1, title: 'Pelicula Uno', description: 'Descripción de la Película Uno' },
  { id: 2, title: 'Pelicula Dos', description: 'Descripción de la Película Dos' },
  { id: 3, title: 'Pelicula tres', description: 'Descripción de la Película tres' },
  { id: 4, title: 'Pelicula cuatro', description: 'Descripción de la Película cautro' },
  { id: 5, title: 'Pelicula cicno', description: 'Descripción de la Película cinco' },
  { id: 6, title: 'Pelicula seis', description: 'Descripción de la Película seis' },
  { id: 7, title: 'Pelicula siete', description: 'Descripción de la Película siete' },
  { id: 8, title: 'Pelicula ocho', description: 'Descripción de la Película ocho' },
  { id: 9, title: 'Pelicula nueve', description: 'Descripción de la Película nueve' },
  { id: 10, title: 'Pelicula diez', description: 'Descripción de la Película diez' },
  { id: 11, title: 'Pelicula once', description: 'Descripción de la Película once' },
  { id: 12, title: 'Pelicula doce', description: 'Descripción de la Película doce' },
  
];

const MovieDetail = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movieId = parseInt(id, 10);
    const movie = mockMovies.find((movie) => movie.id === movieId);
    setMovie(movie);
  }, [id]);

  if (!movie) {
    return <div className="movie-detail">Película no encontrada</div>;
  }

  return (
    <div className="movie-detail">
      <h2>Detalles de la Película {movie.id}</h2>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p> 
    </div>
  );
}

export default MovieDetail;
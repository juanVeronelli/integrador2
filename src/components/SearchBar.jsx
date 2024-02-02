// src/components/SearchBar.js
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './SearchBar.css';

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

const SearchBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(null);

  const onSearch = (value) => {
    if(value == null || undefined) return
    const movieID = mockMovies.find((movie) => movie.title.toLowerCase() === value).id
    navigate(`movie/${movieID}`);
  }


  const valueOnChange = (e) => {
    const value = e.target.value.toLowerCase();
    setValue(value);
  }
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar películas..."
        onChange={ e => valueOnChange(e) }
      />
      <button type='submit' onClick={() => onSearch(value)}> Search </button>
    </div>
  );
}

export default SearchBar;

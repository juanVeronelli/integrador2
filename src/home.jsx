import React, {useState} from 'react';
import MovieCard from './components/MovieCard';
import SearchBar from "./components/SearchBar"
import InfiniteScroll from 'react-infinite-scroll-component';

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

const Home = () => {
  const [items, setItems] = useState(mockMovies.slice(0, 20));
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    if (items.length >= mockMovies.length) {
      setHasMore(false);
      return;
    }
    
    setTimeout(() => {
      setItems(items.concat(mockMovies.slice(items.length, items.length + 20)));
    }, 500);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Lista de Películas</h1>
      </header>
      <SearchBar />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData} 
        hasMore={hasMore} 
        loader={<h4>Cargando...</h4>} 
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! Has visto todas las películas.</b>
          </p>
        }
      >
        <div className="movie-list">
          {items.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default Home;

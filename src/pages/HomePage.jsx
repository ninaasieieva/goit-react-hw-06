import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../components/services/moviesApi';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const moviesList = await getTrendingMovies();

        setMovies(moviesList.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const isMovies = Boolean(movies?.length);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}

      <h1>Trending today</h1>

      {isMovies && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { getMovies } from '../components/services/moviesApi';
import MovieList from '../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) return;

    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const moviesList = await getMovies(query);

        setMovies(moviesList.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  const onSearch = searchValue => {
    setSearchParams({
      query: searchValue,
    });
  };
  const isMovies = Boolean(movies?.length);
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {isMovies && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviesPage;
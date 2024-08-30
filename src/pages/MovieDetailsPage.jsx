import { useEffect, useState } from 'react';
import { getMovieDetails } from '../components/services/moviesApi';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { useParams } from 'react-router-dom';
import MovieCard from '../components/MovieCard/MovieCard';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const movieDetails = await getMovieDetails(movieId);

        setMovie(movieDetails);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  const isMovie = Boolean(movie);

  return (
    <>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {isMovie && <MovieCard movie={movie} />}
    </>
  );
};

export default MovieDetailsPage;
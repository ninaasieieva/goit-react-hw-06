import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../services/moviesApi';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieCastList from '../MovieCastList/MovieCastList';

const MovieCast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieCredits, setMovieCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const movieCredits = await getMovieCredits(movieId);

        setMovieCredits(movieCredits.cast);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}

      {movieCredits && <MovieCastList movieCredits={movieCredits} />}
    </div>
  );
};

export default MovieCast;
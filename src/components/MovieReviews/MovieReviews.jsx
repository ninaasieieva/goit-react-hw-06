import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../services/moviesApi';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import MovieReviewsList from '../MovieReviewsList/MovieReviewsList';

const MovieReviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const reviews = await getMovieReviews(movieId);

        setMovieReviews(reviews.results);
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

      {movieReviews && <MovieReviewsList reviews={movieReviews} />}
      {movieReviews.length === 0 && <p>Ще немає відгуків ＞﹏＜</p>}
    </div>
  );
};

export default MovieReviews;
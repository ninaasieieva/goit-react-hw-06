import { Link, Outlet, useLocation } from 'react-router-dom';
import css from './MovieCard.module.css';
import { useRef } from 'react';

const MovieCard = ({
  movie: {
    backdrop_path,
    original_title,
    genres,
    overview,
    release_date,
    vote_average,
  },
}) => {

  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movies");

  return (
    <div>
      <div className={css.detailsWrapper}>
        <Link to={backLinkRef.current}>Go back</Link>
        <img
          src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
          alt={original_title}
        />
        <div>
          <h2>
            {original_title}({new Date(release_date).getFullYear()})
          </h2>
          <p>User score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>
            {genres
              .map(genre => {
                return genre.name;
              })
              .join(', ')}
          </p>
        </div>
      </div>
      <div>
        <h3>Additional information</h3>
        <Link className={css.additionalLink} to="cast">
          Cast
        </Link>
        <Link className={css.additionalLink} to="reviews">
          Reviews
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieCard;
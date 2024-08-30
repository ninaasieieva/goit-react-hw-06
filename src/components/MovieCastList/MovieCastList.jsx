import css from './MovieCastList.module.css';

const MovieCastList = ({ movieCredits }) => {
  return (
    <ul className={css.movieCreditsList}>
      {movieCredits.map(movieCredit => {
        return (
          <li key={movieCredit.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movieCredit.profile_path}`}
              alt={movieCredit.original_name}
            />
            <h3>Actor: {movieCredit.original_name}</h3>
            <p>Character: {movieCredit.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieCastList;
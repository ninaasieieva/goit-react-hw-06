import css from './MovieReviewsList.module.css';

const MovieReviewsList = ({ reviews }) => {
    return (
      <ul className={css.reviewsList}>
        {reviews.map(review => {
          return (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          );
        })}
      </ul>
    );
};

export default MovieReviewsList;
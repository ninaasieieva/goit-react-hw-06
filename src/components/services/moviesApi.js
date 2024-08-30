import axios from 'axios';

export const getTrendingMovies = async () => {
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODFlYzhkODY3MmRkYWI2NTdmNGIxYmY0OWJlZDBkMCIsIm5iZiI6MTcyNDE1MTE1OC4xNzM3NzYsInN1YiI6IjY2YzQ3MjNmNmZjOTZhZTZmYTFiMTIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Br_RUDajs37rxVwoaxbLMm9izTeu4cZsjsxM-jQRQCU',
    },
  };
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );

  return data;
};

export const getMovieDetails = async movieId => {
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODFlYzhkODY3MmRkYWI2NTdmNGIxYmY0OWJlZDBkMCIsIm5iZiI6MTcyNDE1MTE1OC4xNzM3NzYsInN1YiI6IjY2YzQ3MjNmNmZjOTZhZTZmYTFiMTIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Br_RUDajs37rxVwoaxbLMm9izTeu4cZsjsxM-jQRQCU',
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );

  return data;
};

export const getMovieCredits = async movieId => {
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODFlYzhkODY3MmRkYWI2NTdmNGIxYmY0OWJlZDBkMCIsIm5iZiI6MTcyNDE1MTE1OC4xNzM3NzYsInN1YiI6IjY2YzQ3MjNmNmZjOTZhZTZmYTFiMTIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Br_RUDajs37rxVwoaxbLMm9izTeu4cZsjsxM-jQRQCU',
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );

  return data;
};

export const getMovieReviews = async movieId => {
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODFlYzhkODY3MmRkYWI2NTdmNGIxYmY0OWJlZDBkMCIsIm5iZiI6MTcyNDE1MTE1OC4xNzM3NzYsInN1YiI6IjY2YzQ3MjNmNmZjOTZhZTZmYTFiMTIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Br_RUDajs37rxVwoaxbLMm9izTeu4cZsjsxM-jQRQCU',
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );

  return data;
};

export const getMovies = async searchValue => {
  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODFlYzhkODY3MmRkYWI2NTdmNGIxYmY0OWJlZDBkMCIsIm5iZiI6MTcyNDE1MTE1OC4xNzM3NzYsInN1YiI6IjY2YzQ3MjNmNmZjOTZhZTZmYTFiMTIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Br_RUDajs37rxVwoaxbLMm9izTeu4cZsjsxM-jQRQCU',
    },
  };
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${searchValue}`,
    options
  );

  return data;
};
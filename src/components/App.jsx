import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
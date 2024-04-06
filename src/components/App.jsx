import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Loader from './Loader';
import Navigation from './Navigation/Navigation';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const MoviePage = lazy(() => import("../pages/MoviePage/MoviePage"));
const MovieDetailsPage = lazy(() => import ("../pages/MovieDetailsPage/MovieDetailsPage"));
const MovieCast = lazy(() => import ("../components/MovieDetail/MovieCast"));
const MovieReviews = lazy(() => import ("../components/MovieDetail/MovieReviews"));

function App() {
  return (
    <Navigation>
        <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </Suspense>
    </Navigation>
  );
}

export default App;
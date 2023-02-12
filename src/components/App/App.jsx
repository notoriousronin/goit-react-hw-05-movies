import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Header } from 'components/Header/Header';

const Home = lazy(() => import('../../pages/Home/Home'));
const MovieDetails = lazy(() =>
  import('../../pages/MovieDetails/MovieDetails')
);
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Movies = lazy(() => import('../../pages/Movies/Movies'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
            <Route
              path="/movies/:movieId/reviews"
              element={<Reviews />}
            ></Route>
          </Route>
          <Route path="*" element={'NotFound'} />
        </Route>
      </Routes>
    </div>
  );
};

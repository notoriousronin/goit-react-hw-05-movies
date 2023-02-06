import { Link, useLocation } from 'react-router-dom';
import { MovieList } from './MovieList.styled';

export const MoviesList = ({ trendingMovies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {trendingMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} stet={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </MovieList>
  );
};

import { Link, useLocation } from 'react-router-dom';
import { MovieList } from './MoviesList.styled';

export const MoviesList = ({ trandingMovies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {trandingMovies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </MovieList>
  );
};

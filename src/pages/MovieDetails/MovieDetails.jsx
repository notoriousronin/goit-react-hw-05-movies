import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieById } from 'API/API';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const result = await fetchMovieById(movieId);
        setMovieData(result);
      } catch (error) {
        console.log(error);
        return alert(`Sorry, try again`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <div>
      <Link to={location.state?.from ?? '/'}>Go Back</Link>
      {isLoading && <div>Loading...</div>}
      {movieData && <MovieInfo movieData={movieData} />}
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;

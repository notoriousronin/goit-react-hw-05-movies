import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MovieList/MoviesList';
import { fetchTrandingMovies } from 'API/API';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { results } = await fetchTrandingMovies();
        setTrandingMovies(results);
      } catch (error) {
        console.log(error);
        return alert(`Sorry, please try again`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <div>...Loading</div>}
      {trandingMovies && <MoviesList trandingMovies={trandingMovies} />}
    </div>
  );
};

export default Home;

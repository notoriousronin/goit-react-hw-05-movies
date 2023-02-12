import React from 'react';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'API/API';
import { MoviesList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMoviesData() {
      try {
        setIsLoading(true);
        const { result } = await fetchTrendingMovies();
        setTrendingMovies(result);
      } catch (error) {
        console.log(error);
        return alert(`Damn, we got problem here:( )`);
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesData();
  }, []);

  return (
    <div>
      <h2>Trending Today</h2>
      {isLoading && <div>Loading...</div>}
      {trendingMovies && <MoviesList trendingMovies={trendingMovies} />}
    </div>
  );
};

export default Home;

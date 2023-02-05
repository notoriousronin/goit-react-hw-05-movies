import React from 'react';

export default function MovieList({ fetchTrendingMovies }) {
    return <ul>{fetchTrendingMovies.map(movie => (
      <li key={movie={.id}}></li>
  ))}</ul>;
}

const API_KEY = `2780d3e3fc586e4c6c06c60ace9918c5`;

export const fetchTrendingMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`
  ).then(res => res.json());
};

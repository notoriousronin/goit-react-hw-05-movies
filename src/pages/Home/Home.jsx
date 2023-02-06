import React from 'react';

export default Home = () => {
  return <div>This is Home</div>;
};

// import { useState, useEffect } from 'react';
// import { fetchTrendingMovies } from 'API/API';

// const Home = () => {
//   const [trendingMovies, setTrandingMovies] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     async function getMovieData() {
//       try {
//         setLoading(true);
//         const { results } = await fetchTrandingMovies();
//         setTrandingMovies(results);
//       } catch (error) {
//         console.log(error);
//         return alert(`Damn bro, i'm tired`);
//       } finally {
//         setLoading(false);
//       }
//     }

//     getMovieData();
//   }, []);
//   return (
//     <div>
//       <h2>Trending Movies</h2>
//       {loading && <div>Loading...</div>}
//       {trendingMovies && <div>This is Movie List</div>}
//     </div>
//   );
// };

// export default Home;

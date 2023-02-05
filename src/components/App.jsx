import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <header>
        <NavLink href="">Home</NavLink>
        <NavLink href="">Movies</NavLink>
      </header>
      <Routes></Routes>
    </div>
  );
};

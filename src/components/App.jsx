import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Header />} />
        <Route path="/movies" element={<Header />} />
      </Routes>
    </div>
  );
};

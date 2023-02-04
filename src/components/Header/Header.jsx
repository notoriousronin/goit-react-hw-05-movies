import React from 'react';
import { StyledLink } from './Header.styled';

export default function Header() {
  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </div>
  );
}

import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Wrapper, NavItem } from './Header.styled';

export const Header = () => {
  return (
    <>
      <Wrapper>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/movies">Movies</NavItem>
      </Wrapper>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
};

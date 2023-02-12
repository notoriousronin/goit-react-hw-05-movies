import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 10px;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;
export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: #00008b;
    :hover {
      color: #dc143c;
    }
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #00008b;
  }
`;

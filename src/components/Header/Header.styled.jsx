import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    color: orange;
    :hover {
      color: #55b1c6;
    }
  }
  :hover:not(.active),
  :focus:not(.active) {
    color: #55b1c6;
  }
`;

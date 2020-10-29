import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #212121;
`;

export const Link = styled(NavLink).attrs((props) => ({
  activeClassName: "active",
}))`
  color: white;
  text-decoration: none;

  &.active {
    font-weight: bold;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1em;
`;

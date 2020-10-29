import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  list-style: none;
  max-width: 512px;
  margin: auto;
`;

export const Item = styled.li`
  color: yellow;
  font-family: monospace;
  margin: 1em 0;
  padding: 1em;
  border: 1px solid yellow;
  border-radius: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

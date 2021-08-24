import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(NavLink)`
  background-color: #ff9900;
  color: #fff;
  padding: 0.5rem 2rem;
  margin: 0 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 600;

  :hover {
    background-color: #ca7900;
    color: #fff;
  }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`;
export const LogoLink = styled(Link)`
  text-decoration: none;
`;
export const Logo = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 4rem;
  }
`;
export const Description = styled.p`
  text-align: center;
  font-size: 12px;
  color: #999;
  margin-top: 1rem;
`;

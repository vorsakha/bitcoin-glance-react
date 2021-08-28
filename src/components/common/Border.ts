import styled from "styled-components";

export const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(255, 153, 0, 0.4);
  margin-top: 5px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

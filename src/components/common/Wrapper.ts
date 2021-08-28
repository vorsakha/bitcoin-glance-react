import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
export const Banner = styled.div`
  width: 100%;
  padding: 0 0 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const WrapperMarginY = styled.div`
  margin: 0;

  @media screen and (min-width: 768px) {
    margin: 1rem 0;
  }
`;
export const CenterWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

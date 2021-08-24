import styled from "styled-components";

export const GlanceWrapper = styled.div`
  width: 100%;
  min-height: 100.78px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.4rem 1rem;
  margin: 1rem 0;
  border: 1px solid rgba(255, 153, 0, 0.3);
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  border-radius: 4px;

  font-weight: 300;
  font-size: 1.2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

import styled, { keyframes } from "styled-components";
import { ImSpinner2 } from "@react-icons/all-files/im/ImSpinner2";

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
    
`;
export const SpinnerScoped = styled(ImSpinner2)`
  color: #ff9900;
  font-size: 1rem;
  animation: ${spin} 1s linear infinite;
`;
export const Spinner = styled(ImSpinner2)`
  position: absolute;
  top: 45%;
  left: 45%;
  color: #ff9900;
  font-size: 1rem;
  animation: ${spin} 1s linear infinite;
`;

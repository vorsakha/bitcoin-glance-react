import styled, { keyframes } from "styled-components";
import { ImSpinner8 } from "@react-icons/all-files/im/ImSpinner8";

const spin = keyframes`
    100% {
        transform: rotate(360deg);
    }
    
`;
export const SpinnerScoped = styled(ImSpinner8)`
  color: #ff9900;
  font-size: 1rem;
  animation: ${spin} 1s linear infinite;
`;
export const Spinner = styled(ImSpinner8)`
  position: absolute;
  top: 45%;
  left: 45%;
  color: #ff9900;
  font-size: 1rem;
  animation: ${spin} 1s linear infinite;
`;

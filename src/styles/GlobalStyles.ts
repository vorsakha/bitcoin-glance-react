import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Space Mono", monospace;
        line-height: 1.5rem;
        font-weight: 300;
        color: #333;
    }

   
a {
  color: #ff9900;
}
a:hover {
  color: #ca7900;
}
`;

export default GlobalStyles;

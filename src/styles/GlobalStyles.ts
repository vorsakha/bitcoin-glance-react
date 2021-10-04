import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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

    p {
      margin: 1rem 0;
    }

    h3 {
      margin-top: 2rem;
    }
`;

export default GlobalStyles;

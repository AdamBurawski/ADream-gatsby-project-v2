import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding-top: 80px;
    font-family: 'Montserrat';
      // padding: 80px 65px 0;
      font-family: "arial", sans-serif;
      overflow-x: hidden;
      // background-color: lightgray;

  }
  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }
  p {
    font-size: 16px;
  }
  ul {
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;

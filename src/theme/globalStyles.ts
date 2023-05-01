import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, #root {
    height: 100%;
  };
  body {
    height: 100%;
    font-size: 20px;
    font-family: ${({ theme }) => theme.fontFamilies.main};
    color: ${({ theme }) => theme.colors.black};
  };
  #root {
    height: 100%;
    display: flex;
  }
`;

export default GlobalStyles;

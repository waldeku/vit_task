import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      red: string;
      green: string;
      yellow: string;
      lightBlue: string;
      white: string;
      black: string;
      grays: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
      };
    };
    fontSizes: {
      big: string;
      medium: string;
      small: string;
    };
    fontWeights: {
      light: string;
      normal: string;
      medium: string;
      bold: string;
    };
    fontFamilies: {
      main: string;
    };
  }
}

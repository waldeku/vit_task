import { DefaultTheme } from "styled-components";
import { colors } from "theme/constants";

export const theme: DefaultTheme = {
  colors: {
    red: colors.red,
    green: colors.green,
    yellow: colors.yellow,
    lightBlue: colors.lightBlue,
    white: colors.white,
    black: colors.black,
    grays: { ...colors.grays },
  },
  fontSizes: {
    big: "24px",
    medium: "16px",
    small: "12px",
  },
  fontWeights: {
    light: "300",
    normal: "400",
    medium: "500",
    bold: "600",
  },
  fontFamilies: {
    main: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  },
};

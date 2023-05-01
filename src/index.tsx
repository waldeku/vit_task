import React from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBuilding,
  faSpinner,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";

import { theme } from "theme";
import GlobalStyles from "theme/globalStyles";

const queryClient = new QueryClient();

library.add(faBuilding, faSpinner, faTriangleExclamation);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Reset />
        <GlobalStyles />
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);

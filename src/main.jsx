import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import ThemeProviderContext from "./context/ThemeContext.jsx";
import GlobalStyle from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderContext>
      <GlobalStyle />
      <App />
    </ThemeProviderContext>
  </StrictMode>
);

import { ThemeProvider } from "styled-components";

import { lightTheme } from "../styles/Theme";

export default function ThemeProviderContext({ children }) {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
}

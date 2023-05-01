import "@root/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@root/styles/theme";
import HD_AppBar from "../components/HD_AppBar";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ margin: "85px 20px" }}>
        <HD_AppBar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

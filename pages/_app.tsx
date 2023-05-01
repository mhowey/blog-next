import "@root/styles/globals.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import HD_AppBar from "../components/HD_AppBar";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundColor: "#556CD6",
            color: "white",
          },
        },
      },
    },
    typography: {
      fontFamily: "sans-serif",
      h1: {
        fontSize: "2rem",
        marginBottom: "1rem",
      },
      listItemText: {
        fontSize: "1.5rem",
        margin: 0,
        color: "black",
      },
      body1: {
        // marginBottom: "1.5rem",
      },
      body2: {
        marginBottom: "1rem",
        fontSize: "1.2rem",
      },
    },
    palette: {
      primary: {
        main: "#556cd6",
        secondary: "#19857b",
      },
      secondary: {
        main: "#19857b",
      },
      error: {
        main: "#f44336",
      },
      warning: {
        main: "#ff9800",
      },
      info: {
        main: "#2196f3",
      },
      success: {
        main: "#4caf50",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <main style={{ margin: "85px 20px" }}>
        <HD_AppBar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

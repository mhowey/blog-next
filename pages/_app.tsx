import "@root/styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@root/styles/theme";
import HD_AppBar from "../components/HD_AppBar";
import React, { Component } from "react";

interface AppProps {
  Component: React.FC;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main style={{ margin: "85px 20px" }}>
        <HD_AppBar />
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

import "@root/styles/globals.css";
import type { AppProps } from "next/app";
import HD_AppBar from "../components/HD_AppBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main style={{ margin: '85px 20px'}}>
      <HD_AppBar />
      <Component {...pageProps} />
    </main>
  );
}

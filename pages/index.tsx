import Head from "next/head";
import { Inter } from "next/font/google";
import { Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });
const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta name="description" content="Alpha Starter Template NEXT.js app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h1">{siteName}</Typography>
      <Typography variant="body2">{siteName}</Typography>
    </>
  );
}

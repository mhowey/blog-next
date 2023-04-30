import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@root/styles/Home.module.css";
import { Grid, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });
const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteName}</title>
        <meta
          name="description"
          content=">Alpha Starter Template NEXT.js app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" className={styles.title}>
            {siteName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={styles.description}>{siteName}</Typography>
        </Grid>
      </Grid>
    </>
  );
}

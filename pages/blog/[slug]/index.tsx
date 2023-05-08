import { Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function ArticlePage() {
  const params = useRouter();
  return (
    <div>
      <Typography variant="h1">{params.query.slug}</Typography>
      <Typography variant="body2">Article Content Lorem Ipsum Dolor</Typography>
    </div>
  );
}

import { useState, useEffect } from "react";

import { Typography } from "@mui/material";
import prisma from "../../lib/prisma";
import Link from "next/link";
import { GetStaticProps } from "next";
import { PrismaClient } from "@prisma/client";

export const getStaticProps: GetStaticProps = async () => {
  const gPrisma = prisma as any;
  const feed = await gPrisma.Article.findMany({
    select: {
      title: true,
      slug: true,
      content: true,
      author: true,
    },
  });
  console.log("feed IS ==> ", feed);
  return {
    props: { feed },
    revalidate: 1,
  };
};
export default function BlogPage({ feed }: any) {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    setArticles(feed);
  }, [feed]);
  return (
    <div>
      <Typography variant="h1">Blog</Typography>
      <Typography variant="body2">This is the blog page</Typography>
      <ul>
        {feed.map((post: { id: string; title: string; slug: string }) => (
          <li key={"key" + post.slug}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

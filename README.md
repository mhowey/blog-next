This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

***

# Alpha NEXT.js Blog Edition Starter

## An open-source starter template for creating new NEXT.js apps with a blog

[blog-next-template Is Deployed Here](https://alpha-template.netlify.app/)

### Features
- TypeScript
- MUI@5 with emotion and styled-components
- Basic navigation setup with slide-out drawer
- Standard pages routes setup
- A Blog Interface for various content providers

### Blog Interface

To extend the basic template to 
be more useful for a wider variety
of website types, we're adding a
blogging feature.

***
#### Blogging Requirements
#### Blog Information Architecture
- Blog -> /topics/ top level (i.e. categories)
- Blog -> /[topic-slug] -> articleList()
- Blog -> /[topic-slug] -> /[article-slug] -> articleDetail()

Do we need to have the alternative below...to use an id? or is a unique slug just as good? <strong>Leaning toward toward using slug exclusively. It is more semantic and "SEO" anyway.</strong>

- Blog -> /[topic-slug] -> /[article-id] -> articleDetail()

#### Wildcard "404 Not Found"

The inclusion of any "unknown slug", in either the topic slot, or the article slot, should kick the user to a helpful and fun 404 page that tries to help them with the url using ChatGPT or some other AI mechanism to get them back on track to accomplishing what they were trying to accomplish.

NOTE: ai-user This is going to be a separate open-source project from Howey Design focused on using artificial intelligence to improve the user experience of web applications, starting with "helpful error handling and redirection" -> such as the above requirement. So this part will be developed as a plugin to the system.

***



***
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

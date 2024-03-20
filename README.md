# Next.js Pages Router + Sanity Template

## Built with
- Tailwind CSS
- Sanity CMS
- Jest 

[More info on setting up Sanity](https://www.sanity.io/guides/nextjs-live-preview)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Sanity Setup

**You should already have a Sanity.io account**

### Key components

- **Presentation** is a plugin included with Sanity Studio to simplify displaying a front end inside an iframe with an adjacent document editor. It communicates directly with the front end instead of making round-trips to the Content Lake for faster live preview.

- **Draft mode** is a Next.js-specific way of enabling, checking, and disabling a global variable available during requests so that your application queries draft content.
In other frameworks, you might replace this with an environment variable, cookie, or session.

Follow [this guide](https://www.sanity.io/guides/nextjs-live-preview#0aea8b0d6731) to setup viewer tokens

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Sanity Guides](https://www.sanity.io/guides) - Deep dives into the many features of Sanity.
- [Jest Documentation](https://jestjs.io/docs/getting-started) - Testing Framework
- [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation) - Utility-first CSS framework



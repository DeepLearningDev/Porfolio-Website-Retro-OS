# portfolio-website-retro-os

Retro-futuristic portfolio website scaffold built with Next.js, TypeScript, App Router, and Tailwind CSS.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4

## Structure

- `app/`: routes and root layout
- `components/`: shared UI composition for the site shell
- `lib/`: shared route metadata and future integrations
- `content/`: authored content and placeholder portfolio copy
- `styles/`: global theme and base styling

## Routes

- `/`
- `/projects`
- `/contact`

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## GitHub Data

GitHub-backed portfolio data is fetched on the server only.

Optional environment variables:

```bash
GITHUB_TOKEN=your_github_token
GITHUB_OWNER=DeepLearningDev
```

`GITHUB_TOKEN` is recommended in production to avoid tighter anonymous rate limits.

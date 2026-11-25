# Zaki Dzulfikar — Portfolio

Personal portfolio built with [Next.js](https://nextjs.org) (App Router), React 19, and Tailwind CSS 4. Bilingual (ID/EN).

## Getting Started

Package manager: [pnpm](https://pnpm.io).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command      | Description              |
| ------------ | ------------------------ |
| `pnpm dev`   | Start dev server         |
| `pnpm build` | Production build         |
| `pnpm start` | Run production build     |
| `pnpm lint`  | Run ESLint               |

## Content

Portfolio content lives in `src/data/` (`experience.json`, `projects.json`, `skills.json`, `certificates.json`). UI text and translations are in `src/context/LanguageContext.jsx`.

## Deploy

Deployed on [Vercel](https://vercel.com). Pushes to `master` trigger an automatic deploy.

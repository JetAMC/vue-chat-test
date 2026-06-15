# Vue Chat

A modern chat application built with Vue 3, TypeScript, and Element Plus. Features a multi-chat interface with bot auto-replies, a favorites system, and real-time message display.

## Tech Stack

- **Vue 3** — Composition API with `<script setup>`
- **TypeScript** — Strict mode enabled
- **Vite** — Build tool
- **Pinia** — State management
- **Vue Router** — Client-side routing
- **Element Plus** — UI component library

## Features

- Multiple chat threads (switchable via sidebar)
- Create new chats with custom titles
- Favorite/unfavorite chats with a dedicated Favorites tab
- Send messages with simulated bot auto-replies (1s delay)
- Active chat highlighting and responsive sidebar

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## Project Structure

```
src/
├── components/     # Reusable UI components
├── composables/    # Reusable logic (useAddChat)
├── stores/         # Pinia store (chat & message state)
├── types/          # TypeScript type definitions
├── utils/          # Bot reply generator
├── router/         # Vue Router configuration
└── views/          # Page-level components
```

## Deployment

The project deploys automatically to **Vercel** via GitHub Actions on push to `main`. The pipeline runs lint → build → deploy.

**Required GitHub secrets:**
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

To deploy manually:

```bash
npm run build
npx vercel deploy --prod --token=$VERCEL_TOKEN
```

> **Note:** All data is in-memory only — there is no backend or persistence. Refreshing the page resets state.

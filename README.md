# MyNotes

[Demo](https://leendrew.github.io/vue-notes)

## Stack

- TypeScript
- Vue 3
- Pinia

## Installation

### dev

```bash
cp .env.example .env.local
pnpm i
pnpm dev
```

### prod

```bash
cp .env.example .env.production
pnpm i --frozen-lockfile
pnpm build && pnpm preview
```

# SurgicalDataOS

Production-ready Next.js foundation for the SurgicalDataOS platform.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **ESLint**
- **Framer Motion**
- **Lucide React**

## Project structure

```
src/
├── app/          # Routes, layouts, and page-level code
├── components/   # Reusable UI and layout components
├── hooks/        # Custom React hooks
├── lib/          # Utilities and shared helpers
└── styles/       # Global styles and design tokens
```

Import alias: `@/*` maps to `src/*`.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Production build         |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Utilities

Use the `cn` helper from `@/lib` to merge Tailwind classes:

```tsx
import { cn } from "@/lib";

<div className={cn("base-class", condition && "conditional-class")} />
```

# SurgicalDataOS

The public interface to the SurgicalDataOS knowledge framework — a structured representation of cataract surgical knowledge for artificial intelligence, robotic surgery, simulation and research.

**Live:** [surgicaldataos.com](https://surgicaldataos.com)

## Stack

- Next.js 15 (App Router, static export)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
```

Static files are exported to `out/` for deployment to any static host.

### GitHub Pages

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds and deploys automatically on push to `main`.

For project pages, set:

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name
NEXT_PUBLIC_SITE_URL=https://your-username.github.io
```

For a custom domain (e.g. surgicaldataos.com), leave `NEXT_PUBLIC_BASE_PATH` empty and configure `public/CNAME`.

## Project structure

```
src/
├── app/              # Routes, metadata, sitemap, robots
├── components/
│   ├── hero/         # Hero section
│   ├── layout/       # Navbar, footer, skip link
│   ├── sections/     # Content sections 01–06
│   └── ui/           # Shared UI primitives
├── hooks/            # useReducedMotion
├── lib/              # Constants, site config, motion
└── styles/           # Global CSS
```

## Environment variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL | `https://surgicaldataos.com` |
| `NEXT_PUBLIC_BASE_PATH` | Base path for GitHub Pages | _(empty)_ |

## License

Proprietary. All rights reserved.

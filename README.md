# Stringtale docs

Documentation site for [Stringtale](https://stringtale.com), built with [Astro Starlight](https://starlight.astro.build/).

Published docs: [docs.stringtale.com](https://docs.stringtale.com)

## Local development

This project uses [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`.

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Install dependencies                        |
| `pnpm dev`     | Start local dev server                      |
| `pnpm build`   | Type-check and build production site to `./dist/` |
| `pnpm preview` | Preview the production build locally        |

## Content

Docs live in `src/content/docs/` as Markdown/MDX. Images go under `src/assets/`. Sidebar navigation is configured in `astro.config.mjs`.

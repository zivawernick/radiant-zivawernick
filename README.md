# Ziva Wernick - Software Developer

Personal website and portfolio of **Ziva Wernick**, a software developer building tech for social impact. The site showcases services, project case studies, and a technical stack, with accessibility treated as a first-class feature rather than an afterthought.

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

🌐 **Live site:** [www.zivawernick.com](https://www.zivawernick.com)

## About this project

This is a real portfolio site, not a template demo. It's built on top of the excellent [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter) and customized with personal branding, original content, a contact form, an image gallery lightbox, and a set of accessibility refinements.

Highlights:

- **Accessibility-first** — targets WCAG 2.2 AA, with toggles for dark mode, high contrast, and reduced motion (all respecting system preferences)
- **Command launcher** — keyboard-driven navigation via `Cmd/Ctrl + K`
- **Semantic, landmark-based HTML** with skip links, visible focus indicators, and screen-reader support
- **Project case studies** authored in MDX (CALMe, Homegrown, Jaffa Institute, Keywise Care, My Warrior's Shield, Rabbi Gene)
- **SEO** via `astro-seo` and an automatically generated sitemap
- **Contact form** with client-side validation and spam protection

## Tech stack

| Area          | Tooling                                                        |
| :------------ | :------------------------------------------------------------ |
| Framework     | [Astro](https://astro.build) 6                                |
| Styling       | Tailwind CSS 4 + SCSS with logical/custom properties          |
| Language      | TypeScript (with path aliases)                                |
| Content       | MDX for project case studies                                  |
| Components    | `accessible-astro-components`, `accessible-astro-launcher`    |
| Icons         | `astro-icon` (Lucide, Simple Icons, and more)                 |
| SEO           | `astro-seo`, `@astrojs/sitemap`                               |
| Tooling       | Oxlint, Prettier                                              |
| Hosting       | Cloudflare Workers (static assets)                            |

## Getting started

Requires **Node.js ≥ 22.12.0**. Clone the repo and run any of the following:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start local dev server at `localhost:4321`   |
| `npm run build`   | Build the production site to `./dist/`       |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run Oxlint                                    |

## Deployment

The site is hosted on **Cloudflare Workers** and deploys automatically from Git:

- **Production** — pushing to `main` triggers an automatic Cloudflare build and deploy
- **Previews** — pull requests and non-`main` branches get their own Cloudflare preview deployment, so changes can be reviewed on a live URL before merging

Cloudflare runs `npm run build` and serves the static output from `./dist/` (configured in `wrangler.jsonc`, with `404.astro` handling not-found routes). No manual deploy step is needed.

## Project structure

A few things worth knowing when working in the repo:

- **`theme.config.ts`** — central branding config: site name, SEO metadata, brand colors, navigation, and social links
- **`src/content/projects/*.mdx`** — the portfolio case studies
- **`src/pages/`** — page routes (home, contact, thank-you, accessibility statement, etc.)
- **`src/components/`** — Astro components (with `@components`, `@layouts`, `@assets`, … path aliases defined in `astro.config.mjs`)

## Connect

- GitHub — [@zivawernick](https://github.com/zivawernick)
- LinkedIn — [ziva-wernick](https://www.linkedin.com/in/ziva-wernick/)
- Email — [wernick.ziva@gmail.com](mailto:wernick.ziva@gmail.com)

## Credits

Built on the [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter) by [Incluud](https://github.com/incluud) — a fantastic accessibility-focused foundation for Astro projects. Licensed under MIT.

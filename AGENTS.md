# AI Agents & Assistants Context (AGENTS.md)

This document provides essential context for AI agents (like GitHub Copilot, Cursor, ChatGPT, Claude) working on the Accessible Astro Starter project. It outlines the project structure, coding standards, and architectural decisions to ensure consistent, high-quality contributions.

## Project Overview

- **Name:** Accessible Astro Starter
- **Framework:** Astro 5.16.0+
- **Styling:** Tailwind CSS 4.1+ (using `@tailwindcss/vite`)
- **Language:** TypeScript (Strict mode)
- **Accessibility Goal:** WCAG 2.2 AA and European Accessibility Act (EAA) compliance.

## Key Technologies & Tools

- **Astro:** Static site generator with Islands architecture.
- **Tailwind CSS 4:** Modern utility-first CSS framework with Vite integration.
- **TypeScript:** Type safety across the codebase.
- **Atkinson Hyperlegible:** Primary font for enhanced readability.
- **Lucide Icons:** SVG icons via `astro-icon`.
- **Prettier:** Code formatting with `prettier-plugin-astro` and `prettier-plugin-tailwind`.
- **Oxlint:** Fast linting with accessibility-focused rules.
- **MDX:** Component-driven Markdown for content.

## Architectural Patterns

### 1. Component Structure
- **Location:** `src/components/`
- **Pattern:** Use functional components where possible.
- **Accessibility:** Always include proper ARIA attributes, labels, and roles.
- **Props:** Use TypeScript interfaces for component props.

### 2. Styling Strategy
- **Utility-First:** Use Tailwind CSS 4 utility classes directly in `.astro` and `.tsx` files.
- **Design Tokens:** Use the OKLCH color system defined in `src/styles/tailwind.css`.
- **Responsive Design:** Mobile-first approach using Tailwind's breakpoint prefixes.
- **Reduced Motion:** Always consider `motion-safe` and `motion-reduce` utilities.

### 3. Content Management
- **Content Collections:** Defined in `src/content/config.ts`.
- **Markdown/MDX:** Located in `src/content/`.
- **Assets:** Images should be optimized using Astro's `<Image />` component or similar.

## Coding Standards

### General Rules
- **Semantic HTML:** Use `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, etc.
- **Naming:** Use PascalCase for components (`MyComponent.astro`) and camelCase for variables/functions.
- **Imports:** Use path aliases defined in `tsconfig.json` (e.g., `@components/`, `@assets/`).
- **Dry Principle:** Extract repetitive logic into utility functions in `src/utils/`.

### TypeScript Guidelines
- Avoid `any`. Use specific types or generics.
- Define interfaces for all data structures and component props.
- Utilize Astro's built-in types (e.g., `GetStaticPaths`, `APIRoute`).

### Accessibility (A11y) Focus
- **Images:** Must have descriptive `alt` text or `alt=""` for decorative images.
- **Forms:** Labels must be explicitly associated with inputs. Use `aria-describedby` for error messages.
- **Buttons vs. Links:** Use `<button>` for actions and `<a>` for navigation.
- **Contrast:** Ensure all text meets WCAG 2.2 AA contrast ratios.
- **Keyboard:** All interactive elements must be keyboard-accessible with visible focus states.

## AI Agent Instructions

When generating code or suggesting changes:

1. **Prioritize Accessibility:** Always check if the generated HTML is semantic and accessible.
2. **Follow Tailwind 4 Patterns:** Use the new `@theme` block and modern CSS features if applicable.
3. **Use Path Aliases:** Always use `@components/...` instead of relative paths.
4. **Check Oxlint:** Ensure code adheres to the project's linting standards.
5. **Consistency:** Match the existing coding style and file structure.
6. **Documentation:** Add JSDoc comments for complex functions and components.

## Common Tasks & Commands

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`
- **Linting:** `npx oxlint .`
- **Formatting:** `npx prettier --write .`

---

*This document is a living guide. AI agents should refer to it frequently to maintain project integrity.*

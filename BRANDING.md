# Personal Branding Roadmap

This document tracks the steps taken to transform the Accessible Astro Starter template into a personal brand while maintaining a clean path for upstream updates.

## 1. Project Identity (`package.json`) - ✅ COMPLETE
- [x] Update `name` to `ziva-wernick-portfolio`.
- [x] Update `author` to `Ziva Wernick`.
- [x] Update `description` for personal branding.
- [x] Reset `version` to `0.1.0`.
- [x] Update `repository`, `bugs`, and `homepage` URLs to personal GitHub/domain.

## 2. Site Configuration (`theme.config.ts`) - 🔄 NEXT

- [X] Update `name` to "Ziva Wernick".
- [X] Update `seo.title` and `seo.description`.
- [X] Replace default `socials` with personal links (GitHub, LinkedIn, etc.).
- [X] Update `colors` (primary, secondary, neutral, outline) with brand hex codes.

## 3. Visual Assets
- [X] Replace `src/assets/img/logo.svg` with personal logo.
- [X] Replace `public/favicon.svg` with personal icon.
- [X] Replace `public/social-preview-image.png` with site share image.

## 4. Page Content (`src/pages/`)
- [X] **Index**: Rewrite `Hero` text and "Features" section.
- [X] **About**: Update About section with personal details.
- [ ] **Projects**: Replace placeholder MDX files with real content.
- [X] **Removed Blogs** 
- [X] **Hide FAQ**
 
## 5. Maintenance & Updates
- [ ] **Fetch Updates**: `git fetch upstream`
- [ ] **Preview Changes**: `git log main..upstream/main --oneline`
- [ ] **Merge Updates**: `git merge upstream/main` (Always prioritize your `theme.config.ts` and `package.json` identity during conflicts).

---
*Last Updated: 2026-03-20*

Next steps/issues
  - fix active-state logic so the current section
    link overrides Home
  - adjust section anchor scrolling so links land
    correctly with the fixed nav
  - verify the lightning bolt is the far-right
    icon if that still matters
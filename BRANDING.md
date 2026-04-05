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

 Finalizing the Brand Transformation:
   1. Project Portfolio Cleanup: Systematically replace the content in src/content/projects/*.mdx with your actual
      project details (Keywise Care, Jaffa Institute work, etc.).
   2. Global Metadata Audit: Update the description in src/utils/defineThemeConfig.ts and ensure all SEO fields across
      pages match your brand voice.
   3. Component Showcase Refinement: Either remove src/pages/accessible-components.astro if not needed, or replace its
      "Lorem Ipsum" with meaningful documentation of how your site uses these components.
   4. Documentation Refresh: Rewrite README.md to be a professional "Portfolio" repository readme, highlighting your
      specific skills and the tech stack used.
   5. Logo & Branding: Ensure the "lightning bolt" icon mentioned in your notes is correctly placed or removed
      according to your preference
      
Current Status:
   - Navigation Squiggles: Fixed to update on click, scroll-spy added, and logic updated to handle section IDs
     correctly.
   - Scroll Offset: Headings are now visible when scrolling to sections.
   - Profile Picture: Fixed with a leading slash in the imgSrc path.
   - Branding Plan: Added to BRANDING.md.

  What still remains to be replaced:
   - src/content/projects/*.mdx: All 6 files contain placeholder text about the "Accessible Astro Starter" project.
   - src/pages/accessible-components.astro: Many sections contain "Lorem ipsum" text.
   - src/utils/defineThemeConfig.ts: The description contains "A Portfolio website for So built with Accessible Astro
     Starter".
   - README.md: Still contains the original starter template documentation.
   - AGENTS.md: Still contains the original starter template metadata.

   Additional plans
   The shortlist for what claude suggested is intimidating and i just have no idea... i dont have a pricing range or anything and i dont have testimonials so its a bit strained for me. I also need to fix some of the pictures too, for CAlMe, my grandfathers project details page . I need more pictures for homegrown and for keywise care too. But most of the project pages need an adjustment in the main banner. I also need to run a check on all components i created ensuring for accessibility functioning- the template had a lot but i dont know if the changes i made effected things. I dont like how the tags section is listed. And maybe the projects should have a drop down menu. Clicking brings you to the features but you can also select the names of the projects...
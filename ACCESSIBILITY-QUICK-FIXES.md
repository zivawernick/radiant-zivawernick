# Quick Fix Reference Guide

## 🔴 CRITICAL FIXES - Implement First

### Fix 1: ColorContrast.astro (Line 86)
**What**: Add proper ARIA to contrast score display
```html
<!-- BEFORE -->
<span class="contrast-score" aria-live="polite" />

<!-- AFTER -->
<span class="contrast-score" aria-live="polite" aria-atomic="true" role="status" />
```

### Fix 2: ColorContrast.astro (Lines 77-89, 95-107, 114-126)
**What**: Add aria-label to color items with meaningful context
```html
<!-- ADD to each color-item div -->
role="img"
aria-label="Color swatch: primary 100 - Contrast ratio will be calculated"
```

### Fix 3: GalleryLightbox.astro (Line 165)
**What**: Move focus to close button when lightbox opens
```javascript
// AFTER: updateLightbox(index)
updateLightbox(index)
dialog.showModal()
const closeBtn = dialog.querySelector('.close-button') as HTMLButtonElement | null
if (closeBtn) {
  setTimeout(() => closeBtn.focus(), 0)
}
document.body.style.overflow = 'hidden'
```

### Fix 4: GalleryLightbox.astro (Line 17)
**What**: Add aria-label to video element
```html
<!-- BEFORE -->
<video id="lightbox-video" controls playsinline preload="metadata" hidden>

<!-- AFTER -->
<video id="lightbox-video" controls playsinline preload="metadata" hidden aria-label="Gallery video player">
```

### Fix 5: Hero.astro (Lines 29-34)
**What**: Change H2 subtitle to paragraph (heading hierarchy issue)
```html
<!-- BEFORE -->
<h1>...</h1>
<h2 class="...">Software Developer Building Tech for Social Impact</h2>

<!-- AFTER -->
<h1>...</h1>
<p class="...">Software Developer Building Tech for Social Impact</p>
```

### Fix 6: PageHeader.astro (Line 140)
**What**: Add meaningful alt text to featured image
```html
<!-- BEFORE -->
<Image src={featuredImage} alt="" ... />

<!-- AFTER -->
<Image src={featuredImage} alt={`Featured image for ${title}`} ... />
```

---

## 🟡 MEDIUM FIXES - Implement Second

### Fix 7: Counter.astro (Line 25)
**What**: Add semantic role to counter container
```html
<!-- BEFORE -->
<div class="animate text-center">

<!-- AFTER -->
<figure class="animate text-center" role="doc-statistic">
```

### Fix 8: Counter.astro (Line 30)
**What**: Close the figure tag
```html
<!-- BEFORE -->
</div>

<!-- AFTER -->
</figure>
```

### Fix 9: TechAvatar.astro - Verify Parent Context
**What**: Ensure TechAvatar is always rendered inside a parent `<ul>`
```html
<!-- VERIFY parent has: -->
<ul class="tech-avatars-list">
  <TechAvatar icon="..." title="..." />
  <TechAvatar icon="..." title="..." />
</ul>
```

---

## ✅ PASSING COMPONENTS - No Action Needed
- ✅ BlockQuote.astro
- ✅ BreakoutImage.astro
- ✅ CallToAction.astro
- ✅ ContentMedia.astro
- ✅ Feature.astro
- ✅ FeaturedProjects.astro
- ✅ Footer.astro
- ✅ GalleryLightbox.astro (after fixes)
- ✅ Header.astro
- ✅ LauncherConfig.astro
- ✅ Logo.astro
- ✅ Navigation.astro
- ✅ NavigationItems.astro
- ✅ ResponsiveToggle.astro
- ✅ SocialShares.astro


# Design System & Front-End Specification — NoonPost.

> **Reference priorities**
> - **Homepage:** `index-3.html` (primary / canonical)
> - **Blog listing / search / archive:** `blog-masonry.html` (primary)
> - All other HTML files are secondary but incorporated where relevant.
>
> This document is derived from a full audit of every HTML page in this folder and the two stylesheets that define the system: `assetsn/css/style.css` (2,959 lines) and `assetsn/css/all.css` (3,812 lines). `assetsn/css/custom.css` is currently **empty** (a hook for project-specific overrides).

---

## 1. Overview

**NoonPost.** is a clean, content-first **personal / lifestyle blog** template built on **Bootstrap 4 + jQuery + Owl Carousel**, with a lightweight custom layer (`style.css`) on top. The personality is **soft, editorial and friendly**: a near-white lavender canvas, generous whitespace, rounded "card" surfaces, and a single warm **coral** accent that carries all interactive emphasis.

Key character traits:

- **Editorial & airy** — large cards float on a light background with soft shadows; content (not chrome) leads.
- **Single-accent discipline** — one coral brand color (`#f67280`) drives buttons, category pills, pagination, links, and the back-to-top control. Neutrals carry everything else.
- **Rounded & soft** — 20px radius on cards/inputs, pill-shaped tags, circular avatars and icon buttons. Nothing sharp-cornered.
- **Dark-mode & RTL ready** — a `.dark` theme and a `.rtl` (Tajawal font) layout ship in the CSS, toggled by a header switch.
- **Familiar blog vocabulary** — hero carousel, masonry/list/grid archives, sidebar widgets (latest posts, categories, tags, Instagram, author), single-post with comments, and auth/contact/404 pages.

The system is **utility-class driven** (Bootstrap spacing + bespoke `mb-/mt-` helpers) with semantic component classes (`.post-card`, `.widget`, `.categorie`, `.btn-custom`). It is not tokenized with CSS variables — colors and radii are repeated as literals (see Recommendations).

---

## 2. Design System

### 2.1 Typography

| Token | Value | Notes |
|---|---|---|
| Base font / body | **Muli** (now *Mulish*), `sans-serif` | Loaded from Google Fonts (`assetsn/css/css`) |
| Base size | `16px` | Body `line-height` inherited (≈1.5) |
| Body weight | `400` | Color `#506172` |
| Heading weight | `900` | Color `#152035` |
| Nav / links weight | `700` | Category pills `800`, buttons `600`/`700` |
| RTL font | **Tajawal** | Applied via `body.rtl` |

**Type scale (from `h1`–`h6`):**

| Element | Size | Weight | Color | Usage |
|---|---|---|---|---|
| `h1` | 40px | 900 | `#152035` | (Rare) 404 page number scales to 200px |
| `h2` | 36px | 900 | `#152035` | Hero headline (white on hero) |
| `h3` | 28px | 900 | `#152035` | Category page titles |
| `h4` | 24px | 900 | `#152035` | Single-post title |
| `h5` | 20px | 900 | `#152035` | **Card titles**, widget titles, post-body subheads |
| `h6` | 16px | 900 | `#152035` | Author name, about subheads |
| `p` | 16px | 400 | `#506172` | Body / excerpts |

> CSS quirk worth preserving intentionally: `h5:first-letter` and `p:first-letter` are forced `text-transform: capitalize`, giving the templated lorem copy a title-cased lead-in. Real content should be authored capitalized instead.

### 2.2 Color Palette

| Role | Hex | Used for |
|---|---|---|
| **Primary / brand** | `#f67280` | Buttons, category pills, pagination active, search button, dots (`•`), back-to-top, preloader, link hover target |
| **Primary hover** | `#2b2b2b` | Category pill & `.link` hover background (deliberate dark contrast) |
| **Ink (headings)** | `#152035` | All headings, nav links, strong text |
| **Body text** | `#506172` | Paragraphs, meta, breadcrumbs |
| **Canvas / bg** | `#f9f9ff` | Page background, form inputs, light widget chips |
| **Surface** | `#ffffff` | Cards, widgets, navbar, footer, newsletter section |
| **Dark surface** | `#2b2b2b` | Dark-mode cards / navbar / widgets |
| **Dark bg** | `#1d1d1d` | Dark-mode page background, inputs |
| **Border** | `#eee` | Input borders, dividers |
| **Shadow** | `rgba(69, 67, 96, 0.1)` | Standard soft shadow (`0 5px 20px`) |
| **Image shadow** | `rgba(0, 0, 0, 0.08)` | Card image lift (`0 10px 10px`) |

**Semantic / social brand colors**

| Network | Hex |
|---|---|
| Facebook | `#3b5998` |
| Instagram | `#c32aa3` |
| YouTube | `#e52d27` |
| Twitter | `#1dcaff` |
| Pinterest | `#bd081c` |
| Dribbble | `#dddddd` |

**Semantic usage rules**
- Coral = *action / emphasis only*. Never use it for large text blocks.
- Neutrals (`#152035` / `#506172` / `#f9f9ff`) do all structural and reading work.
- White surfaces separate content from the lavender canvas; the soft shadow is what defines a "card."

### 2.3 Spacing Scale & Grid

- **Container:** `.container-fluid` is capped at **`max-width: 1280px`** (centered). Content columns typically `col-lg-8` + `col-lg-4` sidebar; full-bleed heroes use `col-lg-8 offset-lg-2`.
- **Vertical rhythm helpers** (bespoke, mirrored for margin-top & margin-bottom): `10, 20, 30, 40, 50, 60, 70, 80, 90, 100` (e.g. `.mt-40`, `.mb-50`). Extra top paddings: `.pt-45 / .pt-50 / .pt-55 / .pt-80 / .pt-85`.
- **Negative pulls:** `.mt--10 / .mt--20` and the signature `margin-top: -60px` on card/feature images so media "pops" above its white surface.
- **Fixed widths:** `.newslettre-width` / `.inner-width` / `.page404` / `.sign` = `600px` (or `500px` for sign); `.max-width` sidebar = `600px` on tablet.
- **Base unit** is effectively **10px** (helpers step by 10). Recommend formalizing a 4px/8px base scale if rebuilt (see §9).

### 2.4 Border Radius, Shadows & Effects

| Element | Radius | Shadow |
|---|---|---|
| Cards / widgets / inputs / pills | `20px` | `0 5px 20px rgba(69,67,96,.1)` |
| Ads blocks, category widget items | `10px` | — |
| Instagram tiles, in-body images | `5px` | — |
| Icon buttons, avatars, pagination, dots | `50%` (circle) | — |
| Theme toggle | `34px` (pill) | — |
| Search field | `40px` | `0 5px 20px rgba(69,67,96,.1)` |

**Motion / interaction**
- Default transition: `all 0.5s ease-in-out` on most interactive elements.
- Card & widget images: `transform: scale(1.1)` on hover (0.9s).
- Dropdowns: `rotateX` "fade-up" reveal (`fade-up` class).
- Preloader: `.circle` coral pulsing `scale(0.5→1.2→0)` keyframe (`load`, 0.9s infinite).
- Search overlay: `scale(0,0) → scale(1,1)` + opacity transition (0.7s).
- Smooth scroll enabled globally (`html { scroll-behavior: smooth }`).

### 2.5 Iconography & Illustration Style

- **Font Awesome 5** (Brands / Solid / Regular, via `all.css`) — social icons (`fab fa-facebook-f`, `fa-instagram`, `fa-twitter`, `fa-youtube`, `fa-pinterest`), UI glyphs.
- **Elegant Font Icons** (`elegant-font-icons.css`) — arrows & meta glyphs: `icon_search`, `icon_profile`, `icon_close`, `arrow_up`, `arrow_carrot-*`, `arrow_left/right/back`, `icon_clock_alt`, `icon_quotations_alt`.
- **Illustration style:** photography-led. Cards and heroes are image-dominant (rounded, hover-zoom). No SVG illustrations or duotone art; visual identity comes from photography + the coral accent. Author avatars are circular portraits.
- **Image zoom:** `medium-zoom` library gives click-to-zoom on in-post images (`medium-zoom-image` class), overlaying at `z-index: 999999`.

---

## 3. Layout & Components

### 3.1 Header / Navigation (desktop + mobile)

Shared across **every** page (identical markup, minor `navbar-scroll` / active-state differences).

```html
<nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
  <div class="container-fluid">            <!-- capped at 1280px -->
    <div class="logo">
      <a href="./index.html">
        <img src=".../logo-dark.png"  class="logo-dark">
        <img src=".../logo-white.png" class="logo-white">  <!-- display:none by default -->
      </a>
    </div>
    <div class="collapse navbar-collapse" id="main_nav">
      <ul class="navbar-nav ml-auto mr-auto">   <!-- centered nav -->
        <li class="nav-item dropdown"> … Home / Blog / Posts / Pages … </li>
        <li class="nav-item"><a class="nav-link" href="…">Contact</a></li>
        <li class="nav-item"><a class="nav-link" href="…">About</a></li>
      </ul>
    </div>
    <div class="navbar-right ml-auto">
      <div class="theme-switch-wrapper"><label class="theme-switch">…<input id="checkbox"><div class="slider round"></div></label></div>
      <div class="social-icones"> fb / ig / tw / yt </div>
      <div class="search-icon"><i class="icon_search"></i></div>
      <div class="login-block"> <a class="login-icon"><i class="icon_profile"></i></a>
        <ul class="login-menu fade-up"><li>login</li><li>sign up</li></ul> </div>
      <button class="navbar-toggler" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    </div>
  </div>
</nav>
```

- **Desktop:** white bar, `padding 15px`, subtle shadow (`.navbar-scroll`). Links weight `700`, ink `#152035`, **active/hover → coral**. Dropdowns reveal on **hover** (≥991px) with a `rotateX` fade-up and soft shadow; arrow added via FA caret.
- **Right cluster:** dark-mode toggle (pill switch), 4 social icons, a coral **search** circle, a navy **profile** circle that opens a `login / sign up` menu on hover.
- **Mobile (≤991px):** nav links stack (each `mb-15`); `.navbar-right` is absolutely positioned top-right; dropdowns become tap/click with no shadow. Hamburger is a pure-CSS 3-line mark (box-shadow stripes). Social + search icons hide at ≤576px to save space.

### 3.2 Hero Sections

**Primary (index-3, index, index-1, index-2): `.carousel-hero`**

```html
<section class="section carousel-hero">
  <div class="owl-carousel">
    <div class="hero d-flex align-items-center" style="background-image:url('...')">
      <div class="container-fluid">
        <div class="row"><div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
          <div class="hero-content">
            <a class="categorie">Livestyle</a>
            <h2><a href="…">Headline</a></h2>
            <div class="post-card-info"> avatar(hidden) · author · • · date · • · read-time </div>
          </div>
        </div></div>
      </div>
    </div>
  </div>
</section>
```

- Full-viewport height `calc(100vh - 65px)`, `background-size: cover`, dark overlay `rgba(0,0,0,.5)`.
- Centered white text; Owl Carousel rotates slides; circular prev/next arrows (white border → coral on hover); dots disabled.
- Carousel nav hidden ≤768px.

**Alternates observed in other variants**
- `index-4` / `index-6`: a `section.pt-85` **3-column grid hero** (no carousel) → `col-lg-4 col-md-6` post-cards.
- `index-5`: `section.masonry-layout.pt-45` (masonry feed immediately).

> Keep `index-3`'s carousel hero as the canonical homepage hero.

### 3.3 Content Containers & Grid Systems

- `.container-fluid` (≤1280px) is the universal wrapper.
- **Archives:** `col-lg-8` main + `col-lg-4 .max-width` sidebar.
- **Masonry:** CSS multi-column via `.card-columns` (see §5).
- **Grid:** Bootstrap `row` + `col-lg-6 / col-lg-4 col-md-6`.
- **Single post & static pages:** `col-lg-8` article + `col-lg-4` sidebar.

### 3.4 Cards

**Article card — `.post-card`** (the core unit, used everywhere):

```html
<div class="post-card">
  <div class="post-card-image">
    <a href="…"><img src="…" alt=""></a>     <!-- margin-top:-60px pull-up -->
  </div>
  <div class="post-card-content">
    <a href="…" class="categorie">Travel</a>
    <h5><a href="…">Title</a></h5>
    <p>Excerpt…</p>
    <div class="post-card-info">
      <ul class="list-inline">
        <li><a href="…"><img src="…" alt=""></a></li>   <!-- 40px avatar -->
        <li><a href="…">Author</a></li>
        <li class="dot"></li>
        <li>January 15, 2021</li>
      </ul>
    </div>
  </div>
</div>
```

- White, `padding 30`, radius `20`, soft shadow, `margin-bottom 60`.
- Image sits **above** the card (`margin-top:-60px`), radius 20, hover `scale(1.1)`.
- **Variants**
  - `.post-full` (author page) — full-bleed image variant inside masonry columns.
  - `.post-single` — the article page wrapper (white card, `margin: 30px 0`, image `-60px`, body + footer + tags + share).
  - `.about-us` / `.contact` — white "card" surfaces with a `-60px` hero/map image.

**Meta row (`.post-card-info`)** is the consistent signature: circular avatar + author + coral `•` dot + date (+ optional read-time / comment count).

### 3.5 Buttons, Links & Form Elements

| Component | Class | Style |
|---|---|---|
| Primary button | `.btn-custom` | Coral bg, white, radius 20, `padding 8px 22px`, weight 600; hover → `opacity .8` |
| Inline link/CTA | `.link` | Small coral pill (13px); hover → `#2b2b2b` (with arrow icons) |
| Category tag | `.categorie` | Coral pill (13px, weight 800); hover → `#2b2b2b` |
| Social icon btn | `.social-media a` + `.color-*` | 30px circle, brand bg, white glyph |
| Text input | `.form-control` | bg `#f9f9ff`, border `#eee`, radius 20, focus → soft shadow |
| Newsletter | `.newslettre-form .form-flex` | Email input (radius `20px 0 0 20px`) + `.submit-btn` coral (radius `0 20px 20px 0`) |
| Search overlay | `.search-form` | Rounded 40px field + coral `.search-btn`; full-screen `.search` overlay |
| Checkbox | `.custom-control.custom-checkbox` | Coral when checked |
| Text link | `.btn-link` | Ink/navy, weight 600/700; hover → coral |

**Search overlay** (global): clicking `.search-icon` adds `.search-open` to `.search` (fixed, full-screen, scale-in). Contains a centered rounded form + coral close button.

### 3.6 Footer

```html
<footer class="footer">                 <!-- white -->
  <div class="container-fluid">
    <div class="copyright">             <!-- border-top 1px rgba(21,32,53,.1) -->
      <p>© Copyright 2021 <a>AssiaGroupe</a>, All rights reserved.</p>
    </div>
    <div class="back">
      <a class="back-top"><i class="arrow_up"></i></a>   <!-- fixed coral circle, bottom-right -->
    </div>
  </div>
</footer>
```

Centered copyright, top hairline divider, and a fixed coral circular **back-to-top** button (revealed on scroll via JS).

### 3.7 Other Reusable Components

- **`.newslettre`** — full-width white band, `padding 70px`, 600px centered: title + excerpt + email form + social row. Present on every page.
- **`.ads-block` / `.ads-top`** — centered banner image, radius 10, used between feed sections and inside sidebars (`.widget-ads`).
- **`.loading` preloader** — fixed full-screen lavender with pulsing coral `.circle`.
- **`.categorie-section`** — breadcrumb (`Home › Category`) + `<h3>Category : <span>coral</span></h3>` + optional intro paragraph. Used as the archive/listing header.
- **`.section-title`** — `<h5>` with a 30×2px coral underline (`::after`); the standard widget/card heading.
- **`.pagination`** — centered row of 35px coral-outlined circles; active/hover fills coral + shadow; last item is a `›` arrow.
- **Sidebar widgets** (see §5): latest posts, categories, tags, Instagram grid, author, ads, next/prev, comments.

---

## 4. Homepage Design (`index-3.html`)

### 4.1 Layout & Section Flow

1. **Preloader** (hidden by default) → **Navbar** (`.navbar-scroll`, fixed).
2. **`.carousel-hero`** — full-viewport Owl Carousel (3 slides: Livestyle / Travel / Travel) with overlaid category pill, white headline, and meta row.
3. **`.ads-top`** — single leaderboard ad block.
4. **`.masonry-layout` (`.card-columns`)** — the main feed: **9 article cards** in a 3-column CSS masonry, full-width (no sidebar on the homepage), each with the standard `.post-card` structure.
5. **In-feed ad block** + **`.pagination`** (1–4 + arrow).
6. **`.newslettre`** band.
7. **Footer** + global **search overlay**.

### 4.2 Component Usage

- Hero uses the carousel variant (§3.2); feed uses the masonry card variant (§3.4/§5).
- `post-card-info` meta pattern is identical to every other page → strong consistency.
- The `-60px` image pull-up gives the homepage feed its floating-card rhythm.

### 4.3 Responsive Behavior

| Width | Behavior |
|---|---|
| ≥992px | 3-column masonry (`column-count:3`, gap 30px); hover dropdowns |
| ≤991px | Masonry → **2 columns**; nav collapses; sidebar `.max-width` → 600px centered |
| ≤768px | Masonry → **1 column**; carousel nav arrows hidden; newsletter/inner width → auto |
| ≤576px | Nav social + search icons hidden; hero `h2` → 28px; 5th/6th hero meta hidden; card avatar hidden |
| ≤321px | Hero `h3` → 24px; instagram grid → 2 cols; newsletter/search form stack vertically |

### 4.4 Unique Patterns / Interactions to Preserve

- **Carousel hero + masonry feed** combination is the signature homepage identity.
- **`-60px` image overlap** on cards (the "lifted photo" look).
- **Coral dot (`•`) separators** in every meta row.
- **Hover image zoom** (`scale 1.1`) and **soft card shadow** defining surfaces.
- Dark-mode toggle + search overlay wired in `main.js` / `switch.js`.

---

## 5. Blog & Listing Pages (`blog-masonry.html` primary)

### 5.1 Masonry / Grid Implementation

The archive uses **CSS multi-column** masonry, not a JS library:

```css
.masonry-layout .card-columns { column-count: 3; column-gap: 30px; }
.col2-layout   .card-columns { column-count: 2; }   /* blog-masonry page */
.masonry-layout .card-columns .card { margin-bottom: 20px; margin-top: 40px; }
```

```html
<section class="masonry-layout col2-layout mt-30">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-8 mt--10">
        <div class="card-columns">
          <div class="card"><div class="post-card"> … </div></div>
          <!-- repeat -->
        </div>
        <div class="pagination mt-30"> … </div>
      </div>
      <div class="col-lg-4 max-width"> <!-- sidebar widgets --> </div>
    </div>
  </div>
</section>
```

- `blog-masonry.html` = **2-column** masonry (`col2-layout`) + **sidebar**.
- Note: `index-3` homepage masonry is **3-column, full-width** (no sidebar).

### 5.2 Search / Filter UI

- There is **no dedicated search-results page** — search is a global **overlay** (`.search`, §3.5) with a single text field + coral button.
- Archive **filtering/faceting** is expressed through the **`.categorie-section`** header (breadcrumb + `Category : <span>`) and the sidebar **Categories / Tags** widgets, which act as filters. Keep this as the canonical "filter header" pattern.

### 5.3 Article Card Variants

All three listing layouts reuse the same `.post-card`, differing only in the wrapping grid:

| Layout file | Wrapper | Columns | Sidebar |
|---|---|---|---|
| `blog-masonry.html` ★ | `.card-columns` (`.col2-layout`) | 2 (CSS cols) | ✅ |
| `blog-grid.html` | `.row > .col-lg-6.col-md-6` | 2 (Bootstrap) | ✅ |
| `blog-list.html` | `.row > .col-lg-12` | 1 (full-width) | ✅ |
| `author.html` | `.card-columns` (`.col2-layout`) + `.post-full` | 2 | ❌ |
| Homepage `index-3` | `.card-columns` | 3 | ❌ |

The `author.html` variant adds `.post-full` (full-bleed image post-cards) and a centered **author header** (`.widget-author.inner-width` with an "13 Articles" `.link` badge).

### 5.4 Pagination / Infinite Scroll

- **Pagination** is the standard pattern: `.pagination` with numbered coral circles + arrow. Pure static markup (1–4 + `›`) — not yet wired to data.
- Infinite scroll is **not implemented**; if desired, it would replace/augment the `.pagination` block (the prompt lists it as an option).

### 5.5 Sidebar (present on `blog-masonry` and other archives)

A `col-lg-4 .max-width` column containing, in order:

1. **`.widget` → Latest Posts** (`.widget-latest-posts`): numbered list, 90×90 rounded thumb, hover zoom, coral `nb` badge, title (weight 900) + `icon_clock_alt` date.
2. **Categories** (`.widget-categories`): chip rows (coral `.categorie` + count pill).
3. **Instagram** (`.widget-instagram`): 3×2 image grid, radius 5, hover zoom.
4. **Tags** (`.widget-tags`): pill chips.
5. **Ads** (`.widget-ads`): rounded banner.

Each widget = white card, `padding 30`, radius 20, soft shadow, `margin-bottom 30`, with a `.section-title` (`h5` + coral underline).

---

## 6. Other Key Pages

| Page | Role | Notable patterns to keep |
|---|---|---|
| `post-default.html` | Single article | `.post-single` card; `-60px` image; body with `h5` subheads, captioned `.image`, `.quote` block (coral icon), `.list` (dot bullets); `.post-single-footer` (tags + `.social-media` share); **next/prev post widgets**; **comments** (`.widget-comments` avatars + reply `.link`); **leave-reply form** (`.widget-form`); **author widget** in sidebar. Sidebar mirrors blog widgets. |
| `post-video.html` | Video post | `post-default` + `.post-single-video` (iframe, 400px, radius 20, shadow) replacing the image. |
| `post-audio.html` | Audio post | `post-default` + `.post-single-audio` (embedded player iframe). |
| `post-gallery.html` | Gallery post | `post-default` + `.post-single-gallery` (Owl Carousel of images, 20px radius, custom coral dots). |
| `about.html` | About | `.about-us` card with `-60px` image, description, `.quote`, and the standard sidebar (latest/instagram). |
| `contact.html` | Contact | `.contact` card with **two stacked Google Maps iframes** (`.google-map`, `-60px`) + `.widget-form` contact form (name/email/subject/message + `.btn-custom`) + latest/instagram sidebar. |
| `author.html` | Author archive | Centered `.widget-author.inner-width` profile (avatar, name, "13 Articles" badge, bio, social) → `col2-layout` `.post-full` masonry. No sidebar. |
| `login.html` | Login | `.sign.widget` centered (500px) card; `.sign-form.widget-form` (username/password, remember-me checkbox, forgot link, `.btn-custom`, "Create One" link). |
| `signup.html` | Sign up | Same `.sign.widget` shell; username/email/password + terms checkbox + `.btn-custom` + "Login" link. |
| `page404.html` | 404 | `.page404.widget` centered; giant coral **`404`** (`h1` 200px → responsive 130/100px), "Page Not Found", `.btn-custom` home CTA. |
| `index` / `index-1` / `index-2` | Alt home | Carousel hero + masonry/grid feed (same system as index-3). |
| `index-4` / `index-6` | Alt home | `section.pt-85` **3-col grid hero** (`col-lg-4 col-md-6` post-cards) — a non-carousel homepage option. |
| `index-5` | Alt home | `section.masonry-layout.pt-45` — immediate masonry feed. |

**Conserved everywhere:** identical navbar, newsletter band, footer, search overlay, and the `.post-card` / `.widget` component vocabulary. This consistency is the template's strongest asset — preserve it.

---

## 7. Responsive Strategy

Breakpoints are defined **only in `style.css`** (no Bootstrap default overrides beyond layout classes). The grid is Bootstrap 4 (`col-lg-*`, `col-md-*`); bespoke CSS handles component reflow.

| Breakpoint | What changes |
|---|---|
| **> 992px** (desktop) | Hover-reveal dropdowns (`rotateX` fade-up); masonry 3-col (home) / 2-col (archives); sidebar `col-lg-4`. |
| **≤ 991px** (tablet) | Nav collapses to stacked links; `.navbar-right` absolute top-right; masonry → **2 columns**; sidebar `.max-width` → 600px centered; dropdown shadow removed. |
| **≤ 768px** (large phone) | Masonry → **1 column**; carousel nav hidden; `.search-form` full width; `.inner-width`/`.newslettre-width` → auto. |
| **≤ 576px** (phone) | Nav social + search icons hidden; hero `h2` → 28px; 5th/6th hero meta hidden; `.post-card-info` avatar hidden; comments stack vertically; `.post-single-footer` stacks; `page404` `h1` → 130px. |
| **≤ 321px** (small phone) | Hero `h3` → 24px; instagram → 2 cols; newsletter & search forms stack (inputs full-width, radius 20); `page404` `h1` → 100px; sign controls stack. |

**Container:** `.container-fluid` capped at **1280px** keeps line-length comfortable on large screens.
**Images:** `img { max-width:100%; height:auto }` — fluid by default.
**Dark mode** also has a ≤991px dropdown background override.

---

## 8. Accessibility & Best Practices

**Present / good**
- `navbar-toggler` has `aria-label="Toggle navigation"` and `aria-expanded`.
- Carousel prev/next get `aria-label="Previous"/"Next"`.
- Form success messages use `role="alert"`.
- Semantic landmarks (`nav`, `section`, `footer`) and heading hierarchy (`h1`→`h5`) are used.
- `prefers`/dark mode and RTL are supported at the CSS level.
- Smooth scrolling and visible focusable controls (links/buttons).

**Improvements needed (important)**
1. **Global focus outline removed** — `* { outline: none !important }` kills keyboard focus visibility across the whole site. Reintroduce a `:focus-visible` outline (coral) for accessibility. *(Highest priority.)*
2. **Empty `alt` attributes** — nearly every `<img alt="">` is blank. Add meaningful alt text (and `alt=""` only for decorative icons).
3. **Icon-only links/buttons** — social icons, search, profile, back-to-top have no text/aria-label. Add `aria-label`s.
4. **Color contrast** — coral `#f67280` on white passes for large/bold UI but is weak for small body text; keep coral to large/bold/UI only (already the convention — enforce it).
5. **No skip-link** — add a "skip to content" link for keyboard users given the fixed navbar.
6. **Lazy loading** — add `loading="lazy"` to below-the-fold images; consider `srcset`/`sizes` for responsive imagery.
7. **CSS columns reading order** — `.card-columns` fills top-to-bottom per column, which can scramble logical post order; prefer a flex/grid or JS masonry if reading order matters.
8. **`list-style:none !important` on `*`** is fine but ensure lists remain semantic (`<ul>/<li>` kept — good).

---

## 9. Recommendations & Future Improvements

*Respecting the current aesthetic — these are refinements, not redesigns.*

1. **Tokenize the design system.** Colors, radii, shadows, and the spacing step are repeated as literals throughout `style.css`. Introduce CSS custom properties (`--color-primary:#f67280; --radius-card:20px; --shadow-soft:…`) so the brand can be rethemed in one place. `custom.css` is the natural home (currently empty).
2. **Fix keyboard focus.** Remove `outline:none !important` globally; add `:focus-visible { outline: 2px solid #f67280 }`. This is an accessibility regression in the current code.
3. **Author real `alt` text & `aria-label`s** on all images and icon buttons (see §8).
4. **Unify the six homepage variants.** `index-3` is the chosen canonical homepage; fold the grid-hero (`index-4/6`) and masonry (`index-5`) ideas into *optional sections* rather than separate files, reducing duplication.
5. **Modernize the masonry.** Consider a CSS Grid/`columns` with balanced order or a small JS masonry so card order reads naturally and reflows cleanly — current CSS columns are acceptable but reorder oddly.
6. **Build a real search-results page.** The overlay collects a query but has no results view. Add a `search-results` page reusing the `blog-masonry`/`categorie-section` header + sidebar.
7. **Pagination → data or infinite scroll.** Wire `.pagination` to real data, or offer a "Load more" / infinite-scroll alternative (listed as an option in the brief) replacing the static `.pagination` block.
8. **Performance:** add `loading="lazy"`, responsive `srcset`, and consider deferring the Owl/Medium-Zoom/jQuery stack or migrating to a lighter modern bundle if the project is rebuilt.
9. **Theme persistence & OS preference.** Ensure `switch.js` remembers the choice in `localStorage` and honors `prefers-color-scheme` on first load; verify `.logo-white` is shown on dark/transparent hero contexts (it is `display:none` today).
10. **Copy polish.** "Newslatter" → "Newsletter"; normalize category capitalization (`Livestyle` vs `livestyle`, `food` vs `Food`) via a single source of truth.
11. **Spacing scale.** Adopt a formal 4px/8px base scale behind the `mb-/mt-` helpers for finer control without new one-off classes.
12. **Font pinning.** Muli is now *Mulish*; pin the exact weights used (300/400/600/700/800/900) and self-host or use the documented Google Fonts URL to avoid the `assetsn/css/css` indirection.

---

*Generated from a full audit of the `public/design` HTML templates and `assetsn/css/style.css` + `all.css`. Primary references: `index-3.html` (homepage) and `blog-masonry.html` (listing).*

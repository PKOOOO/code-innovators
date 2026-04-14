# Code Innovators Landing Page — UI/UX Design Rules

These rules capture the complete design system of the Code Innovators landing page.
Any AI building new sections, components, or pages for this project **must** follow
every rule listed here unless explicitly instructed otherwise.

---

## 1. Color System (CSS Custom Properties)

All colours are defined in `app/globals.css` inside the `@theme` block and must be referenced
by their token names — **never** use raw hex or rgba values except where a token does not exist.

| Token | Value | Usage |
|---|---|---|
| `--color-background` | `#1a1a1a` | Page background, text on accent |
| `--color-foreground` | `#ffffff` | Body text |
| `--color-accent` | `#00e6b4` | Primary accent / CTA fill / date pill fill |
| `--color-accent-hover` | `#00cc9f` | Hover state of accent elements |
| `--color-muted` | `#a1a1aa` | Secondary / label text |
| `--color-overlay-dark` | `rgba(0,0,0,0.55)` | Dark overlay on hero images |
| `--color-overlay-purple` | `rgba(30,30,30,0.3)` | Subtle purple tint overlay on hero images |
| `--color-pill-border` | `rgba(255,255,255,0.5)` | Border colour for outlined pill badges |
| Purple CTA | `#8b7ff5` | Manifesto-style buttons; use `bg-[#8b7ff5]/70` at rest and `bg-[#8b7ff5]` on hover |

> **Rule:** The accent colour (`#00e6b4`) is reserved for **primary data / event info** (e.g. date pill, "Buy tickets" CTA).
> Use `#8b7ff5` (purple) for **action CTAs** such as "Join free", "Read Manifesto", or any secondary call-to-action button.

---

## 2. Typography

### Font Families

| Variable | Font | Usage |
|---|---|---|
| `--font-display` | Clash Display | Hero headings, section headings, large motto text |
| `--font-sans` | Geist Sans | Body text, nav links, labels, small UI copy |
| `--font-mono` | JetBrains Mono | Countdown timers, tags, badges, code snippets |

### Type Scale Rules

- **Hero title** — `font-display`, responsive via `TypewriterEffectSmooth`, `font-semibold` or higher.
- **Motto / section h2** — `font-display`, fluid size using `clamp`: e.g. `text-[clamp(2.2rem,6.5vw,6.5rem)]`, `font-semibold`, `leading-[1.05]`, `tracking-tight`.
- **Section labels** — `font-sans`, `text-xs sm:text-sm`, `uppercase`, `tracking-widest`, colour `text-muted`.
- **Nav links** — `text-sm`, `text-muted`, `hover:text-white`, `transition-colors duration-200`.
- **Button / pill text** — `text-xs sm:text-sm`, `font-medium` or `font-bold` depending on importance.

---

## 3. Spacing & Layout

### Container

- Content is **never** centred with a fixed max-width on the landing page. Use `w-full max-w-none` for full-bleed sections.
- Horizontal padding follows this responsive scale: `px-4 sm:px-6 md:px-12 lg:px-16`.
- The Navbar uses a constrained inner container: `max-w-7xl mx-auto`.

### Vertical Rhythm

- Hero content sits **bottom-left**: `absolute inset-0 flex flex-col justify-end pb-24 sm:pb-32 lg:pb-10`.
- Section vertical padding: `py-16 md:py-24`.
- Between the Motto label and the h2: `mb-6 block` on the label, `mb-10` on the heading.

### Negative margin overlap

- The Motto section uses `-mt-px` to eliminate the gap between Hero and Motto, creating a seamless visual flow.

---

## 4. Background Treatment

1. **Hero** — full-viewport fixed background image with two overlays stacked:
   - `bg-black/55 mix-blend-multiply` (dark overlay)
   - `bg-overlay-purple` (subtle purple tint)
2. **Fallback** (no Sanity image) — `bg-gradient-to-br from-[#222222] via-[#1a1a1a] to-background` + `bg-black/30`.
3. **Motto** — absolutely-positioned gradient overlay `from-transparent via-black/20 to-black/40` (top-to-bottom), plus a bottom fade: `from-background via-background/70 to-transparent h-48` to blend into the next section.
4. **Sections below the fold** — solid `bg-background` (`#1a1a1a`).

> Rule: Always maintain visual continuity between sections using gradient fades rather than hard colour borders.

---

## 5. Navbar

- **Position:** `absolute top-0 left-0 right-0 z-50` — overlaps the hero image.
- **Padding:** `px-4 sm:px-6 md:px-12 py-4 sm:py-5`.
- **Logo:** SVG, responsive sizes `w-[100px] md:w-[170px]`, offset with `md:-ml-[150px]`.
- **Nav links:** Visible only on `md:` and above (`hidden md:flex`). Items spaced `gap-8`.
- **CTA buttons — TWO slots:**
  - "Join free" — `hidden sm:inline-flex`, `rounded-full`, `border border-white/30`, `bg-[#8b7ff5]/70 hover:bg-[#8b7ff5]`, `backdrop-blur-sm`, `text-white`.
  - "Buy tickets" — always visible, `rounded-full`, `bg-[#8b7ff5]/70 hover:bg-[#8b7ff5]`, smaller on mobile (`px-3 py-1.5 sm:px-5 sm:py-2`), `font-bold`, `shadow-lg shadow-[#8b7ff5]/20`.

> Rule: Both Navbar CTA buttons use the **purple** (`#8b7ff5`) pill style, NOT the green accent colour.

---

## 6. Hero Section

- **Section wrapper:** `relative min-h-[100dvh] w-full overflow-hidden`.
- **Background layers:** fixed-position (`fixed inset-0 -z-10`) so they stay stationary during scroll.
- **Title rendering:** Split the event title into two `TypewriterEffectSmooth` lines:
  - All words except the last → `text-white dark:text-white`
  - The last word → `text-accent dark:text-accent` with `cursorClassName="bg-accent"`
- **Title class:** `font-display`, `mb-6 sm:mb-8` on the wrapper.
- **Info pills:** Stacked in two rows (`flex flex-col gap-3`):
  - Row 1: Date pill (filled `bg-accent text-background font-bold`) + Location pill (outlined).
  - Row 2: Format pill (outlined).
  - All pills: `px-4 py-2.5 sm:px-6 sm:py-4 md:px-10 md:py-6 rounded-2xl sm:rounded-3xl text-base sm:text-2xl md:text-4xl whitespace-nowrap`.
  - Outlined pills: add `border border-pill-border text-white font-semibold backdrop-blur-sm`.

---

## 7. Motto Section

- **Section wrapper:** `relative min-h-screen flex items-start justify-start pt-20 overflow-hidden -mt-px md:items-center md:pt-0`.
- **Label:** `text-muted text-xs sm:text-sm uppercase tracking-widest mb-6 block`.
- **Heading:** `font-display text-[clamp(2.2rem,6.5vw,6.5rem)] font-semibold leading-[1.05] text-white mb-10 tracking-tight`, text-shadow `0 2px 40px rgba(0,0,0,0.4)`, `textAlign: justify`, `textAlignLast: left`, `hyphens: auto`.
- **CTA pill:** `inline-block bg-[#8b7ff5]/70 hover:bg-[#8b7ff5] transition-colors text-white font-medium px-6 py-2.5 rounded-lg text-sm cursor-pointer backdrop-blur-sm`.

---

## 8. Button / CTA Anatomy

There are two distinct button styles in use:

### Purple Action Button (primary CTA / manifesto style)
```
bg-[#8b7ff5]/70 hover:bg-[#8b7ff5] transition-colors text-white font-medium
px-6 py-2.5 rounded-lg text-sm backdrop-blur-sm
```
Use for: "Join free", "Buy tickets", "Manifesto", and any action/navigation CTA.

### Accent Filled Pill (data / event info only)
```
bg-accent text-background font-bold
px-4 py-2.5 sm:px-6 sm:py-4 md:px-10 md:py-6
rounded-2xl sm:rounded-3xl text-base sm:text-2xl md:text-4xl
shadow-lg shadow-accent/25
```
Use **only** for event info badges (e.g. date, not for actions).

> **Never** use the green accent colour (`#00e6b4`) on clickable action buttons.

---

## 9. Interactivity & Motion

- All colour transitions use `transition-colors duration-200` or `transition-all duration-200`.
- Hover states on nav links: muted → white (`hover:text-white`).
- Hover states on buttons: 70% opacity → full opacity (`hover:bg-[#8b7ff5]`).
- `backdrop-blur-sm` is applied to overlaid UI elements (nav buttons, outlined pills, motto CTA).
- `scroll-behavior: smooth` is set globally on `html`.
- Text selection uses accent colour background: `::selection { background-color: var(--color-accent); color: var(--color-background); }`.

---

## 10. Scroll & Visual Flow

- Hero uses `min-h-[100dvh]` (dynamic viewport height) for reliable full-screen behaviour on mobile.
- The background image is `fixed` (parallax-like) while content scrolls over it.
- Motto has a bottom blur-fade (`h-48 bg-gradient-to-t from-background`) to transition into subsequent sections.
- New sections below must start with solid `bg-background` and can use `min-h-screen`.

---

## 11. Responsive Breakpoints

Follow Tailwind's default breakpoints: `sm` (640px), `md` (768px), `lg` (1024px).

| Element | Mobile default | sm | md | lg |
|---|---|---|---|---|
| Horizontal padding | `px-4` | `px-6` | `px-12` | `px-16` |
| Logo size | 100px | 130px | 170px | 170px |
| Nav links | hidden | hidden | visible | visible |
| "Join free" button | hidden | visible | visible | visible |
| Pill text size | `text-base` | `text-2xl` | `text-4xl` | `text-4xl` |
| Motto items-align | `items-start pt-20` | — | `items-center pt-0` | — |

---

## 12. Accessibility

- Background images always receive a meaningful `alt` text equal to the event title.
- Nav `<Link>` elements are keyboard accessible (default Next.js Link behaviour).
- Cursor on the manifesto pill uses `cursor-pointer` even though it is a `<span>` — if interactivity is added, replace with a `<button>` or `<Link>`.
- Colour contrast: white text on `#8b7ff5` meets WCAG AA; white on `bg-accent` (`#00e6b4`) needs dark text (`text-background`).

---

## 13. File & Component Conventions

- All landing page sections live in `app/components/sections/`.
- Each section is a **default export** of a React Server Component (no `"use client"` unless animation requires it).
- Add `"use client"` only when browser APIs or React hooks are needed (e.g. `Hero.tsx` uses the typewriter animation).
- Sections are composed in `app/page.tsx` as an async server component that fetches from Sanity.
- Sanity content always has a local `fallbackHero` object so the page renders without a Sanity connection.

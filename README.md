<div align="center">

# ✨ Lumina — Landing Page

**A modern, fully responsive SaaS landing page built with pure HTML, CSS and JavaScript.**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-8B5CF6.svg?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-22D3EE.svg?style=flat-square)](https://github.com/stevenmukama/landing-page1/pulls)

</div>

---

## 📖 About

**Lumina** is a high-fidelity, production-ready landing page for a fictional analytics SaaS product. It is built with **zero frameworks and zero build tools** — just clean, semantic HTML, modern CSS and vanilla JavaScript — so you can clone it, open it, and ship it in seconds.

It features a premium dark design with gradient accents, glassmorphism cards, a pure-CSS dashboard mockup, and tasteful scroll-driven animations.

## 🧩 Sections

| # | Section | Highlights |
|---|---------|-----------|
| 1 | **Navbar** | Sticky, blur-on-scroll, active-section highlight, mobile hamburger menu |
| 2 | **Hero** | Gradient headline, CTAs, avatar social proof, animated CSS dashboard mockup with floating notification cards |
| 3 | **Logo marquee** | Infinite-scrolling "trusted by" strip (pauses on hover) |
| 4 | **Features** | 6 glass cards with cursor-tracking glow |
| 5 | **How it works** | 3 connected steps |
| 6 | **Stats band** | Scroll-triggered animated counters |
| 7 | **Testimonials** | 6 review cards with star ratings |
| 8 | **Pricing** | 3 tiers with monthly/yearly toggle (animated price change) |
| 9 | **FAQ** | Accessible `<details>` accordion, one-open-at-a-time |
| 10 | **CTA banner** | Gradient panel with glowing orbs |
| 11 | **Footer** | 5-column link grid, social icons, back-to-top button |

Plus: scroll progress bar, scroll-reveal animations, custom selection color, focus-visible styles and `prefers-reduced-motion` support.

## 🚀 Quick start

No build step. No dependencies. Really.

```bash
# 1. Clone
git clone https://github.com/stevenmukama/landing-page1.git
cd landing-page1

# 2. Open
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```

Or serve it locally (recommended, for correct font caching):

```bash
npx serve .
# or
python3 -m http.server 8000
```

## 📁 Project structure

```
landing-page/
├── index.html          # All markup — semantic & accessible
├── css/
│   └── style.css       # Design tokens, components, animations, responsive rules
├── js/
│   └── main.js         # Menu, scrollspy, reveals, counters, pricing toggle, FAQ
├── LICENSE
└── README.md
```

## 🎨 Customization cheat-sheet

Everything is driven by CSS custom properties at the top of `css/style.css`:

```css
:root {
  --bg: #070B14;              /* page background */
  --primary-strong: #6366F1;  /* brand color */
  --accent-pink: #D946EF;     /* gradient end */
  --font-head: 'Space Grotesk', ...;
  --font-body: 'Inter', ...;
}
```

- **Rebrand:** search & replace `Lumina` in `index.html`, swap the SVG logo mark.
- **Change pricing:** edit the `data-monthly` / `data-yearly` attributes on `.price-amount`.
- **Change gradient:** edit `--grad` and `--grad-text`.

## 🌍 Deployment

The page is 100% static — deploy anywhere in one step:

- **GitHub Pages** — Repo `Settings → Pages → Deploy from branch → main / root`
- **Netlify** — drag & drop the folder at [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel** — `npx vercel`

## 📄 License

Released under the [MIT License](LICENSE) — free to use, remix and make your own.

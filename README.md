# Wiski Photobook — Homepage

React + Vite marketing homepage for Wiski. Built from the design tokens and
brand rules in [`ds-wiski/`](ds-wiski/readme.md).

## Run it

```bash
docker compose up --build      # http://localhost:3003
npm run build    # production build in dist/
```

## How it's organized

```
src/
  styles/
    tokens.css       ← colors, fonts, spacing, radii — CHANGE THE SITE HERE
    breakpoints.js    ← the three shared breakpoint widths
    global.css        ← resets, base element styles, font import
  i18n/
    index.js          ← i18next setup (Spanish default, English included)
    locales/es.json    ← all Spanish copy
    locales/en.json    ← all English copy
  components/
    Header/, Hero/, ProductShelf/, Advantages/, Steps/,
    Reviews/, Faq/, Footer/          ← one section = one folder
    ui/Button.jsx                    ← shared primary/secondary button
    LanguageSwitcher/                ← <select> that calls i18n.changeLanguage
  App.jsx                            ← assembles the sections, nothing else
```

Every component is a plain function component with its own CSS Module
(`Component.module.css`), so styles never leak between sections and a class
name collision is impossible. No CSS-in-JS, no styling library, no global
class-naming convention to remember — just co-located CSS.

## Changing the look

Everything visual — colors, font sizes, spacing, corner radii — is a CSS
variable in [`src/styles/tokens.css`](src/styles/tokens.css). Change a value
there and it updates everywhere it's used. Component stylesheets never
hard-code a color or a pixel size that already has a token.

## Changing the copy / adding a language

All page text lives in `src/i18n/locales/*.json`, not in the components. To:

- **Edit copy:** change the value in `es.json` (and `en.json` if you keep
  English in sync). No component code changes.
- **Add a language:** copy `en.json` to e.g. `fr.json`, translate it, then
  register it in `src/i18n/index.js` (`resources` and `supportedLngs`) and
  add it to `LANGUAGES` in `src/components/LanguageSwitcher/LanguageSwitcher.jsx`.

The brand voice is Spanish (Ecuador) — see `ds-wiski/readme.md` for the
content rules. English is included to demonstrate the i18n setup; drop it if
the site should ship Spanish-only.

## Responsive breakpoints

Mobile-first. Every component's CSS follows the same two breakpoints:

- `640px` — tablet
- `1024px` — desktop


# UI kit — Wiski marketing site

Recreation of the only surface `wiski-home.fig` defines: **Page-1 / Desktop - 2** (node `1:91`), the 1440px desktop homepage. Open `index.html`.

## Files

| File | Contains |
| --- | --- |
| `index.html` | interactive shell — nav state, cart counter, shelf CTA |
| `SiteHeader.jsx` | 120px blue bar: wordmark, `NavigationPill` row, account + cart glyphs with badge |
| `HeroSection.jsx` | overlapping 32px-radius photo collage, B612 eyebrow capsule, Braah One headline, orange CTA, 5 palette dots |
| `ProductBand.jsx` | blue shelf band: two `ProductInfoCard`s, `Más vendido` / `Envíalo como regalo` badges, ghost CTA |
| `MidSections.jsx` | advantages panel + 4-step flow with the sparkle cluster |
| `FooterSections.jsx` | `CardGridReviews` band, FAQ panel, footer wordmark / payments / legal row |

## Interactions (fake, click-through)

- Nav pills switch between `default` and `active`.
- **Crear mi albúm** scrolls to the product shelf.
- **Empecemos** on either card adds to the cart — the button reads `Añadido ✓` and the header cart badge counts up.

## Fidelity notes

- Composed from `components/core` primitives; nothing is re-implemented locally.
- The advantages panel, the steps strip and the FAQ accordion are the source's own flattened bitmaps. The advantages panel carries English placeholder copy (and the word *"pixory"*) from a template — kept verbatim rather than invented over, but it must be replaced before real use.
- Hero tile sizes come from the rendered frame; individual instance resizes weren't captured in the extraction, so the five tiles are positioned to match the frame proportionally at the source's exact 32px radius.
- Hero headline set at 44px — see readme.md "Known gaps".
- No mobile layout exists in the source, so none is recreated.

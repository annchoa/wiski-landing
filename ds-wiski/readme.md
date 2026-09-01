# Wiski Photobook — Design System

Wiski is an Ecuadorian photobook service: it turns the photos sitting on your phone into a printed album that ships anywhere in the country. The whole brand argument is one movement — **screen → paper**. A photo on a phone gets lost; printed, it stays.

The name is deliberately **"Wiski"** with an *s* — in Ecuador people say *"wiski"* instead of *"cheese"* before a photo. It is a cultural wink, never over-explained, and never a whisky reference.

**Hard rule:** the word *Wiski* never appears alone. It always travels with a tagline or with context that ties it to photobooks (`Wiski Photobook`, `ÁLBUMES IMPRESOS PARA TODO EL ECUADOR`) — otherwise it reads as a liquor brand.

## Product lines

| Line | What it is | Language it owns |
| --- | --- | --- |
| **Wiski Ruta** | Travel album | world / route / trip; *el mundo cabe en un libro*; suitcase → bookshelf; trips you forget if you don't print them |
| **Wiski Momento** | Gift album for a specific date | gift / relationship; a present that doesn't stay "seen"; a date that matters |

Never mix one line's vocabulary into the other.

**Audience:** adults 20–60, tech-comfortable, mid-to-upper spending power, strongly identified with Ecuador. The `.ec` anchoring, the local insight and the local voice are what separate Wiski from generic international photobook competitors.

## Sources

- **Figma:** `wiski-home.fig`, page *Page-1*, frame **Desktop - 2** (node `1:91`, 1440 × 3536) — the marketing homepage. 4 component sets + 8 standalone symbols, 66 Figma Variables, 12 bitmaps. Mounted read-only; no shareable URL was provided.
- **Upload:** `uploads/photobook_cut.png` — the Wiski wordmark. Shipped as `assets/logo-wiski.png`, white background keyed out to alpha and flattened to the brand yellow so it can sit on the blue header.
- **Brand brief** (Spanish, supplied in chat): name origin, screen→paper narrative, the two product lines, tone rules and things to avoid. Summarised throughout this file.

Everything numeric in this system is transcribed from the .fig. Where a value looks odd (5px button radius, 23px badge radius, 13px eyebrow) that is the design, not a rounding error.

---

## CONTENT FUNDAMENTALS

**Language.** Spanish (Ecuador), always. English copy in the source file is placeholder text from a template, not Wiski voice.

**Person.** Second-person singular *tú*, and first-person possessive when the user owns the object: *"Crear mi albúm"*, *"Elige tu momento"*, *"Sube tus fotos"*, *"Personaliza tu álbum"*, *"Esperalo en casa"*. The brand speaks *to* you (*elige*, *sube*, *personaliza*) and lets you speak *for* yourself (*mi álbum*). Never corporate "we offer".

**Casing.** Sentence case everywhere. The single exception is the eyebrow label, which is full caps in B612: `ÁLBUMES IMPRESOS PARA TODO EL ECUADOR`. Headlines take no terminal period; body sentences do.

**Register.** Contemporary, warm, close. Not corporate, not cold, not unreachable-luxury. Local humour is welcome; heavily generational slang is not — the audience spans 20 to 60.

**The closing rule.** Every piece of copy has to land on the physical act: printing, paper, the book, the shelf, the doormat. Emotion alone is not enough. *"Una bestia esa foto, imprímela"* works because it ends on the imperative *imprímela*.

**Approved campaign hook:** *"Qué bestia esa foto"* (on the homepage as *"Una bestia esa foto, imprímela"*). It is a hook, not a permanent fixed tagline.

**Copy examples straight from the file**

- Hero: `Una bestia esa foto, imprímela`
- Eyebrow: `ÁLBUMES IMPRESOS PARA TODO EL ECUADOR`
- Primary CTA: `Crear mi albúm` — note the source's own accent placement; keep it verbatim in recreations
- Secondary CTA: `Empecemos`
- Badges: `Más vendido`, `Envíalo como regalo`
- Section head: `Descubre las ventajas de usar Wiski`
- Shelf: `Elige tu momento` / `Formatos pensados para lo que quieras recordar o regalar`
- Steps: `1. Elige tu plantilla` · `2. Sube tus fotos` · `3. Personaliza tu álbum` · `4. Esperalo en casa`
- Step body: *"Escoge el estilo que más se parezca a tu viaje. Todo se personaliza después en el editor."*
- FAQ: `¿Cómo hago mi pedido?` · `¿Cuánto tarda en llegar mi pedido?` · `¿Qué tanto puedo personalizar mi álbum?` · `¿Qué tamaños de álbum tienen?`
- Footer legal: `@ 2026, wisky` (lowercase, in the source)

**Numbers.** Concrete and small: *menos de 10 minutos*, *entre 5 y 10 días hábiles*, *21x30 cm*, *15x15 cm*. Sizes use `x`, not `×`.

**Emoji:** none. Zero emoji anywhere in the source. Don't introduce them.

**Avoid:** cold/corporate copy; *Wiski* with no context; pure nostalgia that never closes on print; slang that excludes the older half of the audience; luxury language.

---

## VISUAL FOUNDATIONS

**Structure.** A 1440px white page interrupted by **full-bleed colour bands**. The header is a 1440 × 120 bar in `rgba(37,70,253,.86)`; the product shelf sits on the same blue; the reviews section sits on a slightly lighter `#4460fe`. Nothing is contained in a max-width shell with visible side rails — bands run edge to edge and content is inset (content edge ≈ 169px on the artboard, 114px for the reviews grid). There are no sticky or fixed elements in the source.

**Colour.** Three loud colours plus black, white and one cream.

- Blue `#2546FD` — the brand's ground colour: header, bands, badges, secondary buttons, links.
- Orange `#FC552A` — reserved almost entirely for the primary CTA. Used once as a hero dot.
- Yellow `#FDC41E` — the wordmark, one hero dot, the "gift" badge.
- Cream `#F8EFE0` — label colour *on* orange, and a hero dot.
- Ink `#1E1E1B`, pure black `#000` for headlines and legal.
- `#D9D9D9` for header glyphs and every card hairline; `#F5F5F5` for panel grounds.

Two background colours per page, maximum: white plus blue. The five 58px circles under the hero are a literal statement of the palette.

**Type.** Three families, one job each.

- **Braah One** — hero headline only. Rounded, friendly, geometric display. Set solid (100% line-height), two lines.
- **Assistant** — everything else. Regular 11/15/16, SemiBold 12/16/20, Bold 14/20. Headings and labels are set solid at 100%; body runs at 1.4.
- **B612** — the all-caps eyebrow at 13px. A technical, aeronautical face used purely as a texture contrast.
- The Figma variable collection nominally names *Inter* as `--family-sans`; the artwork uses Assistant, so `--family-sans` is bound to Assistant here and the kit primitives inherit it.

**Corner radii** (never rounded to a grid): buttons **5px**, cards and nav pills **8px**, the small badge pill **23px** on a 90×20 box, hero photo tiles **32px**, avatars and dots fully round.

**Cards.** White fill, 1px `#D9D9D9` border, 8px radius, **no shadow at all**. Product card: 16px padding, 16px gap, 247px media slot. Review card: 24px padding, 24px gap. Elevation in this system is communicated by colour bands and borders, never by shadow — the only box-shadow in the file is the 2px inset ring that draws the ghost button.

**Buttons.** Primary: 203 × 46, 5px radius, orange fill, cream Assistant Bold 14 label, left-aligned at 18px. Secondary/ghost: same box, transparent fill (`rgba(182,176,175,0)`), `inset 0 0 0 2px #2546FD`, blue centred label. No gradients, no shadows.

**Imagery.** Real photobooks in real hands — travel spreads, printed grids, an album on a café table, a hand turning a page. Warm daylight, natural colour, no filters, no duotone, occasional black-and-white *inside* the printed spreads. Photos are placed as overlapping 32px-radius tiles that break each other's edges; no frames, no shadows, no captions.

**Transparency & blur.** Used once and deliberately: the header blue is 86% alpha over white. No backdrop blur anywhere. The eyebrow label sits in an opaque warm-grey capsule over imagery rather than relying on a protection gradient — capsules, not gradients, are this brand's legibility device.

**Decoration.** Black four-point sparkles (`StarFour`) in a three-size cluster (111 / 51 / 27px boxes, one rotated ~2.5°) mark the last step of the flow. That is the only ornament in the system.

**Motion & states.** The source is a static frame, so nothing is specified. House rules that fit the brand: 150–200ms ease-out for hovers, no bounce, no parallax, no entrance animation on load. Hover — filled buttons darken ~6%, ghost buttons fill with 8% blue, nav pills take the `hover` variant's grey fill, photo tiles lift nothing and only brighten slightly. Press — 98% scale, no colour change. Focus — 2px blue ring at 2px offset, reusing `--ring-secondary`.

---

## ICONOGRAPHY

The file carries **five real vector glyphs and no icon font**. All are copied into `assets/icons/`:

- `user.svg` and `shopping-cart-simple.svg` — the header pair, 24 × 24 boxes, shipped filled `#D9D9D9`. Both are Phosphor-family line glyphs (`ShoppingCartSimple` is the layer's own name), medium weight, rounded joins.
- `star-four-lg.svg` / `star-four-md.svg` / `star-four-sm.svg` — the `StarFour` sparkle at its three drawn sizes, solid black.
- The 20px rating star is a component (`Star`), painted with `currentColor` — recolour by setting `color`.

Everything else that looks like an icon in the source is **baked into a bitmap** (the advantages panel's heart/book/stars, the FAQ's minus signs, the payment-method logos). Those are used as images, not redrawn.

**Rules:** no emoji, no unicode glyphs as icons, no icon fonts. If a needed glyph is missing, use **Phosphor** (regular weight) from CDN to match the two header icons, and flag the addition. Never approximate a copied bitmap with hand-drawn SVG.

---

## Index

```
styles.css                  root entry — @import list only
tokens/
  fonts.css                 Assistant · Braah One · B612 (Google Fonts)
  colors.css                brand ramp + semantic aliases
  typography.css            families, weights, exact sizes
  geometry.css              radii, spacing, layout, link colours
components/core/            the 12 families from the .fig (+ fig-tokens / fig-typography / fig-assets)
guidelines/*.card.html      17 foundation specimen cards
ui_kits/website/            marketing homepage recreation
assets/                     logos, photography, icons
thumbnail.html              homepage tile
SKILL.md                    Agent-Skill entry point
```

### Components (`components/core/`)

Exactly the inventory the .fig defines — 4 variant sets and 8 standalone symbols. Nothing added.

- **Avatar** — 12 variants (Type × Size × Shape)
- **AvatarBlock** — avatar + name + date
- **CardGridReviews** — 2 variants (Platform: desktop / mobile)
- **NavigationPill** — 3 variants (State: default / active / hover)
- **NavigationPillList** — 2 variants (Direction: row / column)
- **ProductInfoCard** — product shelf card
- **ReviewCard** — rating + title + body + avatar block
- **Star** — 20px rating star
- **Text** — 16/1.4 body
- **TextHeading** — 24/1.2/-2% heading
- **TextSmall** — 14/1.4
- **TextStrong** — 16/1.4 semibold

**Intentional additions:** none. **Deviations:** `ProductInfoCard` gained `title` / `price` / `body` / `image` props so its baked text is settable — the layout is untouched.

### UI kits

- `ui_kits/website/` — the Wiski marketing homepage (the only surface the source defines). See its README.

### Known gaps / substitutions

- **Fonts are loaded from Google Fonts.** The .fig ships no binaries. Assistant, Braah One and B612 are all genuine Google Fonts families and the names match the file exactly, but if Wiski licenses different cuts, drop the files in and swap `tokens/fonts.css`.
- **Hero headline size.** The text layer reports Braah One at 20px, but the layer's own 396 × 108 box and the rendered frame put it near 44px — almost certainly a per-character override the extraction can't resolve. The kit uses **44px** and notes it here.
- **Three flattened bitmaps** stand in for real markup because that is how the source stores them: the advantages panel (`assets/hero-photobook-collage.png`), the steps strip (`assets/steps-strip.png`) and the FAQ accordion (`assets/faq-panel.png`). The advantages panel contains English placeholder copy and the word *"pixory"* from whatever template it came from — it is **not** Wiski content and must be replaced with real Spanish copy before any real use.
- **No mobile frame** exists in the file, so no mobile kit is provided. `CardGridReviews` has a `mobile` variant and `fig-tokens.css` carries `data-mode="mobile" | "tablet"` device widths, but no mobile layout was designed.
- The Figma Variable collection is a generic light/dark UI-kit ramp (greys, `Inter`) that predates the Wiski palette. Both are shipped: `fig-tokens.css` for the primitives, `tokens/colors.css` for the brand. **When they disagree, the brand file wins.**

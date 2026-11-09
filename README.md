# Wiski Landing

The landing page of Wiski Photobook. Wiski is an Ecuadorian service. It turns the photos on a phone into a printed photobook.

Read [GLOSSARY.md](GLOSSARY.md) before you write code or copy. It defines the project terms.

## Run

```bash
docker compose up --build   # dev server on http://localhost:3003
npm install && npm run dev  # the same server, without Docker
```

## Scripts

| Script               | What it does                                               |
| -------------------- | ---------------------------------------------------------- |
| `npm run dev`        | Starts the dev server.                                     |
| `npm run build`      | Makes the production build in `dist/`.                     |
| `npm run check`      | Runs Biome (lint and format) and the TypeScript check.     |
| `npm run format`     | Fixes the format and the safe lint errors.                 |
| `npm run images`     | Makes a WebP next to each PNG in `src/assets/photobooks/`. |
| `npm test`           | Runs the tests once.                                       |
| `npm run test:watch` | Runs the tests on each change.                             |

The GitHub Pages workflow runs `check`, `test` and `build` before it deploys.

## Stack

- React, Vite and TypeScript (`strict`).
- Tailwind CSS v4 and shadcn/ui. The shadcn components are in `src/components/ui/`. Add one with `npx shadcn@latest add <name>`.
- Phosphor for icons (`@phosphor-icons/react`).
- i18next for all text. Spanish is the default language.
- Biome for lint and format. Vitest and Testing Library for tests.

Use the `@/` alias for imports from `src/`.

## Design tokens

All colors, fonts and radii are in [src/index.css](src/index.css). There are three layers:

1. **Primitives.** The `--gray-*` scale. It is a placeholder until the brand colors exist.
2. **Semantic variables.** The shadcn names. `--primary` and `--secondary` are the two brand roles.
3. **Tailwind theme.** The `@theme` block maps the semantic variables to utilities.

Components use layers 2 and 3. Never write a color value in a component. To apply the brand colors, change `--primary` and `--secondary`.

Fonts: Bricolage Grotesque for headings, Inter Tight for all other text.

## Text and languages

All text is in `src/i18n/locales/`. A component never contains copy. Spanish is the default. To add a language, add a locale file and register it in `src/i18n/`.

## Photos

Photobook photos are in `src/assets/photobooks/`. A name has the form `<place>-<part>`, for example `miami-open`. The parts are `front`, `back` and `open`.

## Brand and content

The copy follows these rules.

- **Language.** Spanish of Ecuador, always. The English text exists only for the language switcher.
- **Person.** Use `tú`: _elige_, _sube_, _personaliza_. Use the possessive when the customer owns the object: _mi álbum_, _tu álbum_. Never use the corporate "we offer".
- **Case.** Sentence case everywhere. A headline has no final period. A body sentence has one.
- **Register.** Warm and close. Not cold, not corporate, not luxury. Light local humor is welcome. Do not use slang that the 20-to-60 audience cannot share.
- **Closing rule.** Every text ends on the physical act: print, paper, the book, the shelf, the door of the house.
- **Numbers.** Concrete and small. Write sizes with `x`, not `×`: `21x30 cm`.
- **No emoji.**
- **The name.** The word _Wiski_ never appears alone in a text. Write _Wiski Photobook_, or put it next to a context that ties it to photobooks. The logo is the exception. _Wiski_ comes from the Ecuadorian word that people say before a photo, as in "cheese". Never explain this and never refer to whisky.

### Product lines

| Line              | What it is                   | Words it owns                            |
| ----------------- | ---------------------------- | ---------------------------------------- |
| **Wiski Ruta**    | A travel photobook.          | Trip, route, world, suitcase, bookshelf. |
| **Wiski Momento** | A gift photobook for a date. | Gift, date, relationship.                |

Never use the words of one line in the other.

### Audience

Adults of 20 to 60 years. They are at ease with technology and have medium to high spending power. They identify strongly with Ecuador.

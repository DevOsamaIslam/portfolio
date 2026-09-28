# Osama Samarrai

**Sr. Scrum Master & Full Stack Developer**

A seasoned full-stack developer on the MERN stack with a proven track record in spearheading agile projects. Committed to constant professional development and keen to leverage my skills in a vibrant, forward-thinking organization.

[osamasamarrai@gmail.com](mailto:osamasamarrai@gmail.com) · [LinkedIn](https://www.linkedin.com/in/osama-islam-40441) · [GitHub](https://github.com/DevOsamaIslam)

---

## About

### Software, delivered the agile way

Full-stack MERN engineer and certified Scrum Master focused on shipping maintainable products and keeping delivery predictable.

|         7+          |            2             |        7         |       2        |
| :-----------------: | :----------------------: | :--------------: | :------------: |
| Years of experience | Senior engineering roles | Projects shipped | Certifications |

---

## Experience

### Where I've worked

Seven years of aggregate experience in the IT sector, 3 years of ITIL and 4 years of web development, shipping CRM products and running the agile ceremonies that keep delivery predictable.

#### Senior Full Stack Developer — MBL High Tech

`March 2022 — November 2025` · Cyprus

- Championed agile methodologies as Scrum Master, driving delivery across the team.
- Led development of CRM software for 3+ projects from architecture to release.
- Migrated legacy projects to newer, more efficient technologies with zero downtime.
- Inspected code for quality, consistency, and adherence to best practices.
- Created project structures focused on scalability and long-term maintainability.

#### System Engineer — T-Systems

`June 2018 — January 2021` · Malaysia

- Acted as the communication link between management and the engineering team.
- Built automation processes and bots for INM and aggregate reporting.
- Implemented batch resolution of events, cutting manual toil for operations.

---

## Projects

### Things I've built

A live full-stack product, plus the open-source hooks, utilities and Node.js projects I reach for in my own work.

### 🟢 Apologea.com — _Live_

Full-stack web product, live and in production — the flagship of my independent work.

`Full Stack` · `MERN` · `Live Site`

[Visit the site ↗](https://apologea.com)

#### useSmartValue

Custom React hook unifying useState and useRef behind a single, ergonomic API.

`React` · `TypeScript` · `Hooks`

[View source ↗](https://github.com/DevOsamaIslam/use-smartvalue)

#### useFilters Hook

React hook that manages complex filter state and URL-synced query parameters.

`React` · `TypeScript` · `Hooks`

[View source ↗](https://github.com/DevOsamaIslam/use-filters)

#### MUI Custom Form

Declarative form component combining MUI with react-hook-form validation.

`React` · `MUI` · `react-hook-form`

[View source ↗](https://github.com/DevOsamaIslam/mui-custom-form)

#### Async Handler

TypeScript utility that gracefully handles both sync and async errors in one wrapper.

`TypeScript` · `Async` · `Utility`

[View source ↗](https://github.com/DevOsamaIslam/async-handler-ts)

#### Trading Bot

Node.js trading bot using the KuCoin SDK with technical indicators and backtesting.

`Node.js` · `TypeScript` · `KuCoin SDK`

[View source ↗](https://github.com/DevOsamaIslam/KuCoin-Advanced-Trading-Bot)

#### PoW Blockchain

Proof-of-work blockchain implemented from scratch in modular TypeScript.

`TypeScript` · `Blockchain` · `Cryptography`

[View source ↗](https://github.com/DevOsamaIslam/privchain)

---

## Skills

### The stack and how I work

What I build with day to day, plus the habits that keep a team moving.

**Frontend**
`React` · `TypeScript` · `Redux Toolkit` · `MUI` · `React Router` · `SASS` · `CSS-in-JS`

**Backend**
`Node.js` · `Express` · `MongoDB` · `Mongoose` · `SQL` · `Socket.IO` · `JWT`

**Testing & Quality**
`Vitest` · `Playwright` · `Selenium` · `Code Review`

**Practices & Tools**
`Agile / Scrum` · `Python` · `AI-assisted Development`

### Ways of working

`Leadership` · `Team Coordination` · `Mentoring` · `Resource Optimization` · `Debugging` · `Analytics` · `Communication` · `Independent Work` · `Quality Assurance` · `Fast Learning` · `Problem Solving` · `Task Management`

---

## Credentials

### Certificates, education & languages

#### Certifications

- **Professional Scrum Master I (PSM I)** — Scrum.org · 2026
- **MERN Stack Developer — E-Degree Program** — Eduonix · 2022

#### Education

- **BSc (Hons) in Software Engineering with Multimedia** — Malaysia · 2017
- **C1 in Spanish Language** — Spain · 2026 · In progress

#### Languages

| Language | Level        |
| -------- | ------------ |
| Arabic   | Native       |
| English  | Business     |
| Spanish  | Intermediate |

---

## Contact

### Let's talk

Open to conversations about full-stack architecture, agile delivery and anything MERN. Email is the fastest way to reach me.

- 📧 [osamasamarrai@gmail.com](mailto:osamasamarrai@gmail.com)
- 💼 [LinkedIn ↗](https://www.linkedin.com/in/osama-islam-40441)
- 🐙 [GitHub ↗](https://github.com/DevOsamaIslam)

---

## Localization

The site ships in **English**, **Spanish** and **Arabic** at runtime — no i18n library, no extra routes, no duplicated markup. Switching is instant and only the copy changes; layout, icons and links are shared.

### Supported locales

| Code | Language | Switcher pill | `<html lang>` | `<html dir>` |
| ---- | -------- | ------------- | ------------- | ------------ |
| `en` | English  | `EN`          | `en`          | `ltr`        |
| `es` | Español  | `ES`          | `es`          | `ltr`        |
| `ar` | العربية  | `AR`          | `ar`          | `rtl`        |

English is the authoring language and the fallback. Each locale supplies both halves of its content:

| File                   | Holds                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- |
| `src/i18n/locales.ts`  | The locale list itself, plus each language's label, short code, BCP-47 tag and writing direction, and the resolution logic |
| `src/i18n/messages.ts` | UI chrome — nav, headings, buttons, kickers, stat labels, screen-reader strings, `<title>` and meta description |
| `src/data/cv.ts`       | Narrative CV content — experience, projects, skills, certificates, education                                    |

Both copy files are typed `Record<Locale, …>` and everything is read through the `useI18n()` hook:

```tsx
const { locale, setLocale, t, cv } = useI18n()
```

In the navbar switcher each option is labelled in its own language (a Spanish speaker looks for "Español"), while the group's accessible name follows the active locale.

### Right-to-left (Arabic)

Arabic is laid out right-to-left, so `localeMeta` carries a `direction` per language and the app shell is built around it. Three things change together, all derived from the same locale:

| Piece                                   | What it does                                                                                                                       |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `<html dir>` / `<html lang>`            | Set by `I18nProvider` in a **layout** effect, so the first painted frame is already RTL. This is what flips flex rows, text alignment and scrollbars. |
| `theme.direction`                       | `AppThemeProvider` builds the theme with `createAppTheme(direction)`; MUI reads it for direction-aware component internals (Button icon slots, `MenuList` key handling). |
| Emotion cache (`src/theme/rtlCache.ts`) | One cache per direction. The RTL cache runs `stylis-plugin-rtl` (cssjanus), so the CSS MUI generates from `sx`, theme `styleOverrides` and `GlobalStyles` is mirrored automatically. |

Because the caches use different `key`s (`muiltr` / `muirtl`), the generated class names are prefixed per cache — switching direction cannot leak a stale rule from the other stylesheet, and no markup is duplicated. `prefixer` is listed explicitly in `stylisPlugins` because supplying that option replaces Emotion's defaults rather than extending them.

What the stylis plugin handles for free: `left`/`right`, `margin-*`, `padding-*`, `border-*`, `text-align`, `float`, `background-position`, and the X sign of `translate`/`translateX`. It also **does not** touch `scaleX`, which is what `Icon`'s `rtlFlip` prop uses to mirror directional glyphs (the hero's arrow) without double-flipping.

A few things are deliberately script-specific rather than mirrored:

- **Arabic type** — the font stacks fall back to `Cairo` before `system-ui`, so Arabic copy renders in a face drawn for the script while Latin copy keeps Sora/Inter (fallback is per glyph, so one stack serves every locale). Headings also get looser leading (`1.45` vs `1.25`).
- **No tracking, no case** — kickers and the "Live" flag drop `letter-spacing` and `text-transform` when `theme.direction === 'rtl'`: Arabic has no letter case, and tracking pulls its joined letters apart.
- **Terminology stays English** — product and repo names, languages, libraries, certifications and stack labels are never translated (`React`, `TypeScript`, `MERN`, `MUI`, `Scrum.org`, `Professional Scrum Master I (PSM I)`, `T-Systems`, `Apologea.com`, `Full Stack`, `Live Site`, `Hooks`, `Code Review`, `Agile / Scrum`, `AI-assisted Development`), and neither are the terms a developer would say that way in an English-language standup: `Scrum Master`, `Agile`, `React Hook`, `API`, `CRM`, `ITIL`. Transliterations such as "سكرام ماستر" or "أجايل" read as foreign to the developers this portfolio is aimed at, so the prose around those terms is idiomatic Arabic while the terms themselves stay recognizable.

### Language resolution

On first render the active language is resolved in this order:

1. **Saved choice** — `localStorage` key `osama-portfolio:locale`, written every time a visitor picks a language.
2. **Browser language** — the first of `navigator.languages` whose primary subtag is supported, so `es-419`, `es-ES`, `ar-EG` and `en-GB` all resolve to their base language. Falls back to the single `navigator.language` value when `navigator.languages` is empty.
3. **English** — `DEFAULT_LOCALE`.

Both storage reads are wrapped in `try/catch`, so when storage is unavailable (private mode, blocked cookies) the site still works — the choice simply does not survive a reload.

To reset a visitor to step 2, clear the key in DevTools → Application → Local Storage, or run `localStorage.removeItem('osama-portfolio:locale')`.

### Adding a language

Because both copy files are `Record<Locale, …>`, a half-finished language cannot ship: the TypeScript build fails until every string exists.

1. Add the code to `LOCALES` in `src/i18n/locales.ts` and its entry to `localeMeta` (in-language `label`, `short` pill text, BCP-47 `tag`, and `direction` — `'rtl'` is all a right-to-left language needs; the theme, cache and `<html dir>` follow from it).
2. Add the complete `Messages` object for it in `src/i18n/messages.ts`, including the `meta` title and description.
3. Add the complete `Cv` object for it in `src/data/cv.ts`.
4. When the language uses a script the Latin fonts do not cover, add its web font to the `<link>` in `index.html` and to the stacks in `src/theme/theme.ts` — **before** `system-ui`, so the fallback wins over whatever the platform ships.

The switcher renders one segment per entry in `LOCALES`, so no component changes are needed. Verify with `npx tsc --noEmit` and `npm run build`, then switch to the language in a browser and confirm `<html dir>`, mirrored padding (e.g. the experience timeline rail sits on the right in RTL) and that directional icons point the right way.

### Client-side only — known limitation

Switching happens entirely in the browser and there are no per-language routes, which means:

- `index.html` ships the English `<title>` and meta description, so crawlers and social previews always see English, even though `I18nProvider` rewrites the document metadata as soon as the page mounts.
- There is no shareable per-language URL — the choice lives in `localStorage` on the visitor's device.
- Properly localized SEO metadata would need prerendered per-locale routes (e.g. `/es`) — deliberately out of scope for now.

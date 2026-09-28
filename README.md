# Osama Samarrai

**Sr. Scrum Master & Frontend Developer**

A seasoned MERN stack developer with a proven track record in spearheading agile projects. Committed to constant professional development and keen to leverage my skills in a vibrant, forward-thinking organization.

[osamasamarrai@gmail.com](mailto:osamasamarrai@gmail.com) · [LinkedIn](https://www.linkedin.com/in/osama-islam-40441) · [GitHub](https://github.com/DevOsamaIslam)

---

## About

### Software, delivered the agile way

MERN stack engineer and certified Scrum Master focused on shipping maintainable products and keeping delivery predictable.

|         7+          |            2             |        7         |       2        |
| :-----------------: | :----------------------: | :--------------: | :------------: |
| Years of experience | Senior engineering roles | Projects shipped | Certifications |

---

## Experience

### Where I've worked

Seven years of aggregate experience in the IT sector, 3 years of ITIL and 4 years of web development, shipping CRM products and running the agile ceremonies that keep delivery predictable.

#### Senior Frontend Developer — MBL High Tech

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

A live product plus the open-source hooks and utilities I reach for in my own work.

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

Open to conversations about frontend architecture, agile delivery and anything MERN. Email is the fastest way to reach me.

- 📧 [osamasamarrai@gmail.com](mailto:osamasamarrai@gmail.com)
- 💼 [LinkedIn ↗](https://www.linkedin.com/in/osama-islam-40441)
- 🐙 [GitHub ↗](https://github.com/DevOsamaIslam)

---

## Localization

The site ships in **English** and **Spanish** at runtime — no i18n library, no extra routes, no duplicated markup. Switching is instant and only the copy changes; layout, icons and links are shared.

### Supported locales

| Code | Language | Switcher pill | `<html lang>` |
| ---- | -------- | ------------- | ------------- |
| `en` | English  | `EN`          | `en`          |
| `es` | Español  | `ES`          | `es`          |

English is the authoring language and the fallback. Each locale supplies both halves of its content:

| File                   | Holds                                                                                                           |
| ---------------------- | --------------------------------------------------------------------------------------------------------------- |
| `src/i18n/locales.ts`  | The locale list itself, plus each language's label, short code and BCP-47 tag, and the resolution logic         |
| `src/i18n/messages.ts` | UI chrome — nav, headings, buttons, kickers, stat labels, screen-reader strings, `<title>` and meta description |
| `src/data/cv.ts`       | Narrative CV content — experience, projects, skills, certificates, education                                    |

Both copy files are typed `Record<Locale, …>` and everything is read through the `useI18n()` hook:

```tsx
const { locale, setLocale, t, cv } = useI18n()
```

In the navbar switcher each option is labelled in its own language (a Spanish speaker looks for "Español"), while the group's accessible name follows the active locale.

### Language resolution

On first render the active language is resolved in this order:

1. **Saved choice** — `localStorage` key `osama-portfolio:locale`, written every time a visitor picks a language.
2. **Browser language** — the first of `navigator.languages` whose primary subtag is supported, so `es-419` and `es-ES` both resolve to `es`, and `en-GB` resolves to `en`. Falls back to the single `navigator.language` value when `navigator.languages` is empty.
3. **English** — `DEFAULT_LOCALE`.

Both storage reads are wrapped in `try/catch`, so when storage is unavailable (private mode, blocked cookies) the site still works — the choice simply does not survive a reload.

To reset a visitor to step 2, clear the key in DevTools → Application → Local Storage, or run `localStorage.removeItem('osama-portfolio:locale')`.

### Adding a language

Because both copy files are `Record<Locale, …>`, a half-finished language cannot ship: the TypeScript build fails until every string exists.

1. Add the code to `LOCALES` in `src/i18n/locales.ts` and its entry to `localeMeta` (in-language `label`, `short` pill text, BCP-47 `tag`).
2. Add the complete `Messages` object for it in `src/i18n/messages.ts`, including the `meta` title and description.
3. Add the complete `Cv` object for it in `src/data/cv.ts`.

The switcher renders one segment per entry in `LOCALES`, so no component changes are needed. Verify with `npx tsc --noEmit` and `npm run build`.

### Client-side only — known limitation

Switching happens entirely in the browser and there are no per-language routes, which means:

- `index.html` ships the English `<title>` and meta description, so crawlers and social previews always see English, even though `I18nProvider` rewrites the document metadata as soon as the page mounts.
- There is no shareable per-language URL — the choice lives in `localStorage` on the visitor's device.
- Properly localized SEO metadata would need prerendered per-locale routes (e.g. `/es`) — deliberately out of scope for now.

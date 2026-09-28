/**
 * Single source of truth for all portfolio content.
 *
 * The shape of the CV is declared here exactly once — company names, repo
 * links, product names, tech tags and certificates read the same in every
 * language — and only the prose is translated. Each translated block is keyed
 * by id and typed `Record<Locale, Record<Id, …>>`, so adding a language means
 * adding one copy object and TypeScript reports any field left behind.
 *
 * Synced from docs/cv.md — update here when the CV changes.
 */

import type { Locale } from '../i18n/locales'

/* ------------------------------------------------------------------ *
 * Language-neutral content
 * ------------------------------------------------------------------ */

export const profile = {
  name: 'Osama Samarrai',
  initials: 'OS',
  /** Kept as a string so it drops straight into the stats grid. */
  years: '7+',
} as const

/** Icons double as contact identifiers, so they also key the translated label. */
export type ContactKey = 'mail' | 'linkedin' | 'github'

/** Only the label of a contact is translated, never the value or the href. */
export const contacts = [
  {
    icon: 'mail',
    value: 'osamasamarrai@gmail.com',
    href: 'mailto:osamasamarrai@gmail.com',
  },
  {
    icon: 'linkedin',
    value: 'in/osama-islam',
    href: 'https://www.linkedin.com/in/osama-islam-40441',
  },
  {
    icon: 'github',
    value: 'DevOsamaIslam',
    href: 'https://github.com/DevOsamaIslam',
  },
] as const satisfies readonly { icon: ContactKey; value: string; href: string }[]

export type ProjectId =
  | 'useSmartValue'
  | 'useFilters'
  | 'muiCustomForm'
  | 'asyncHandler'
  | 'tradingBot'
  | 'powBlockchain'
  | 'apologea'

/**
 * Repo URLs below currently point at the GitHub profile plus the repo slug.
 * Replace `href` values with direct repo/demo links when available.
 */
const githubProfile = 'https://github.com/DevOsamaIslam/'

type ProjectMeta = {
  id: ProjectId
  name: string
  tags: readonly string[]
  href: string
  featured?: boolean
}

/** Product names, tags and links are proper nouns, so they never translate. */
const projectMeta: readonly ProjectMeta[] = [
  {
    id: 'useSmartValue',
    name: 'useSmartValue',
    tags: ['React', 'TypeScript', 'Hooks'],
    href: githubProfile + 'use-smartvalue',
  },
  {
    id: 'useFilters',
    name: 'useFilters Hook',
    tags: ['React', 'TypeScript', 'Hooks'],
    href: githubProfile + 'use-filters',
  },
  {
    id: 'muiCustomForm',
    name: 'MUI Custom Form',
    tags: ['React', 'MUI', 'react-hook-form'],
    href: githubProfile + 'mui-custom-form',
  },
  {
    id: 'asyncHandler',
    name: 'Async Handler',
    tags: ['TypeScript', 'Async', 'Utility'],
    href: githubProfile + 'async-handler-ts',
  },
  {
    id: 'tradingBot',
    name: 'Trading Bot',
    tags: ['Node.js', 'TypeScript', 'KuCoin SDK'],
    href: githubProfile + 'KuCoin-Advanced-Trading-Bot',
  },
  {
    id: 'powBlockchain',
    name: 'PoW Blockchain',
    tags: ['TypeScript', 'Blockchain', 'Cryptography'],
    href: githubProfile + 'privchain',
  },
  {
    id: 'apologea',
    name: 'Apologea.com',
    tags: ['Full Stack', 'MERN', 'Live Site'],
    href: 'https://apologea.com',
    featured: true,
  },
]

export type SkillGroupId = 'frontend' | 'backend' | 'testing' | 'practices'

type SkillGroupMeta = { id: SkillGroupId; items: readonly string[] }

/** Technology names are brands, so only the group heading is translated. */
const technicalSkillMeta: readonly SkillGroupMeta[] = [
  {
    id: 'frontend',
    items: ['React', 'TypeScript', 'Redux Toolkit', 'MUI', 'React Router', 'SASS', 'CSS-in-JS'],
  },
  {
    id: 'backend',
    items: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'SQL', 'Socket.IO', 'JWT'],
  },
  {
    id: 'testing',
    items: ['Vitest', 'Playwright', 'Selenium', 'Code Review'],
  },
  {
    id: 'practices',
    items: ['Agile / Scrum', 'Python', 'AI-assisted Development'],
  },
]

export type JobId = 'mbl' | 'tsystems'

type JobMeta = { id: JobId; company: string }

const jobMeta: readonly JobMeta[] = [
  { id: 'mbl', company: 'MBL High Tech' },
  { id: 'tsystems', company: 'T-Systems' },
]

export type EducationId = 'bsc' | 'spanish'

type EducationMeta = { id: EducationId; year: string; current?: boolean }

const educationMeta: readonly EducationMeta[] = [
  { id: 'bsc', year: '2017' },
  { id: 'spanish', year: '2026', current: true },
]

/** Certificates keep their official name and issuer in every language. */
export const certificates = [
  { name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org', year: 2026 },
  { name: 'MERN Stack Developer — E-Degree Program', issuer: 'Eduonix', year: 2022 },
] as const

/* ------------------------------------------------------------------ *
 * Content types (what the components consume)
 * ------------------------------------------------------------------ */

export type Job = {
  company: string
  role: string
  period: string
  location: string
  points: readonly string[]
}

export type Project = {
  id: ProjectId
  name: string
  description: string
  tags: readonly string[]
  href?: string
  featured?: boolean
}

export type SkillGroup = { category: string; items: readonly string[] }

export type EducationEntry = {
  degree: string
  place: string
  year: string
  current?: boolean
}

export type LanguageEntry = { name: string; level: string }

/** Everything on the page that depends on the language. */
export type Cv = {
  title: string
  summary: string
  /** Label for each entry of `contacts`, keyed by its icon. */
  contactLabels: Record<ContactKey, string>
  jobs: readonly Job[]
  projects: readonly Project[]
  technicalSkills: readonly SkillGroup[]
  softSkills: readonly string[]
  education: readonly EducationEntry[]
  languages: readonly LanguageEntry[]
}

/* ------------------------------------------------------------------ *
 * Translated copy
 * ------------------------------------------------------------------ */

const profileCopy: Record<Locale, Pick<Cv, 'title' | 'summary'>> = {
  en: {
    title: 'Sr. Scrum Master & Frontend Developer',
    summary:
      'A seasoned MERN stack developer with a proven track record in spearheading agile projects. ' +
      'Committed to constant professional development and keen to leverage my skills in a vibrant, ' +
      'forward-thinking organization.',
  },
  es: {
    title: 'Scrum Master Senior y Desarrollador Frontend',
    summary:
      'Desarrollador del stack MERN con amplia experiencia liderando proyectos ágiles. ' +
      'Comprometido con el desarrollo profesional continuo y con ganas de aportar mis habilidades ' +
      'a una organización dinámica y con visión de futuro.',
  },
}

const contactLabelCopy: Record<Locale, Record<ContactKey, string>> = {
  en: { mail: 'Email', linkedin: 'LinkedIn', github: 'GitHub' },
  es: { mail: 'Correo', linkedin: 'LinkedIn', github: 'GitHub' },
}

type JobCopy = {
  role: string
  period: string
  location: string
  points: readonly string[]
}

const jobCopy: Record<Locale, Record<JobId, JobCopy>> = {
  en: {
    mbl: {
      role: 'Senior Frontend Developer',
      period: 'March 2022 — November 2025',
      location: 'Cyprus',
      points: [
        'Championed agile methodologies as Scrum Master, driving delivery across the team.',
        'Led development of CRM software for 3+ projects from architecture to release.',
        'Migrated legacy projects to newer, more efficient technologies with zero downtime.',
        'Inspected code for quality, consistency, and adherence to best practices.',
        'Created project structures focused on scalability and long-term maintainability.',
      ],
    },
    tsystems: {
      role: 'System Engineer',
      period: 'June 2018 — January 2021',
      location: 'Malaysia',
      points: [
        'Acted as the communication link between management and the engineering team.',
        'Built automation processes and bots for INM and aggregate reporting.',
        'Implemented batch resolution of events, cutting manual toil for operations.',
      ],
    },
  },
  es: {
    mbl: {
      role: 'Desarrollador Frontend Senior',
      period: 'Marzo 2022 — Noviembre 2025',
      location: 'Chipre',
      points: [
        'Impulsé las metodologías ágiles como Scrum Master, mejorando la entrega en todo el equipo.',
        'Lideré el desarrollo de software CRM en más de 3 proyectos, desde la arquitectura hasta el lanzamiento.',
        'Migré proyectos heredados a tecnologías más nuevas y eficientes sin tiempo de inactividad.',
        'Revisé el código para garantizar la calidad, la consistencia y el cumplimiento de las buenas prácticas.',
        'Creé estructuras de proyecto centradas en la escalabilidad y el mantenimiento a largo plazo.',
      ],
    },
    tsystems: {
      role: 'Ingeniero de Sistemas',
      period: 'Junio 2018 — Enero 2021',
      location: 'Malasia',
      points: [
        'Serví de enlace de comunicación entre la dirección y el equipo de ingeniería.',
        'Desarrollé procesos de automatización y bots para INM y la generación de informes agregados.',
        'Implementé la resolución por lotes de eventos, reduciendo el trabajo manual de operaciones.',
      ],
    },
  },
}

const projectCopy: Record<Locale, Record<ProjectId, string>> = {
  en: {
    useSmartValue:
      'Custom React hook unifying useState and useRef behind a single, ergonomic API.',
    useFilters:
      'React hook that manages complex filter state and URL-synced query parameters.',
    muiCustomForm:
      'Declarative form component combining MUI with react-hook-form validation.',
    asyncHandler:
      'TypeScript utility that gracefully handles both sync and async errors in one wrapper.',
    tradingBot:
      'Node.js trading bot using the KuCoin SDK with technical indicators and backtesting.',
    powBlockchain:
      'Proof-of-work blockchain implemented from scratch in modular TypeScript.',
    apologea:
      'Full-stack web product, live and in production — the flagship of my independent work.',
  },
  es: {
    useSmartValue:
      'Hook de React que unifica useState y useRef en una única API ergonómica.',
    useFilters:
      'Hook de React que gestiona estados de filtro complejos y parámetros de consulta sincronizados con la URL.',
    muiCustomForm:
      'Componente de formulario declarativo que combina MUI con la validación de react-hook-form.',
    asyncHandler:
      'Utilidad de TypeScript que gestiona con elegancia errores síncronos y asíncronos en un solo contenedor.',
    tradingBot:
      'Bot de trading en Node.js que usa el SDK de KuCoin, con indicadores técnicos y backtesting.',
    powBlockchain:
      'Blockchain de prueba de trabajo implementada desde cero en TypeScript modular.',
    apologea:
      'Producto web full-stack, en producción y en vivo: el proyecto insignia de mi trabajo independiente.',
  },
}

const skillGroupCopy: Record<Locale, Record<SkillGroupId, string>> = {
  en: {
    frontend: 'Frontend',
    backend: 'Backend',
    testing: 'Testing & Quality',
    practices: 'Practices & Tools',
  },
  es: {
    frontend: 'Frontend',
    backend: 'Backend',
    testing: 'Pruebas y calidad',
    practices: 'Prácticas y herramientas',
  },
}

const educationCopy: Record<Locale, Record<EducationId, { degree: string; place: string }>> = {
  en: {
    bsc: {
      degree: 'BSc (Hons) in Software Engineering with Multimedia',
      place: 'Malaysia',
    },
    spanish: { degree: 'C1 in Spanish Language', place: 'Spain' },
  },
  es: {
    bsc: {
      degree: 'Licenciatura (Hons) en Ingeniería de Software con Multimedia',
      place: 'Malasia',
    },
    spanish: { degree: 'Nivel C1 de Español', place: 'España' },
  },
}

const softSkillCopy: Record<Locale, readonly string[]> = {
  en: [
    'Leadership',
    'Team Coordination',
    'Mentoring',
    'Resource Optimization',
    'Debugging',
    'Analytics',
    'Communication',
    'Independent Work',
    'Quality Assurance',
    'Fast Learning',
    'Problem Solving',
    'Task Management',
  ],
  es: [
    'Liderazgo',
    'Coordinación de equipos',
    'Mentoría',
    'Optimización de recursos',
    'Depuración',
    'Analítica',
    'Comunicación',
    'Trabajo autónomo',
    'Aseguramiento de calidad',
    'Aprendizaje rápido',
    'Resolución de problemas',
    'Gestión de tareas',
  ],
}

const languageCopy: Record<Locale, readonly LanguageEntry[]> = {
  en: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Business' },
    { name: 'Spanish', level: 'Intermediate' },
  ],
  es: [
    { name: 'Árabe', level: 'Nativo' },
    { name: 'Inglés', level: 'Empresarial' },
    { name: 'Español', level: 'Intermedio' },
  ],
}

/* ------------------------------------------------------------------ *
 * Assembly
 * ------------------------------------------------------------------ */

/** Neutral structure + translated prose, joined into what the page renders. */
const buildCv = (locale: Locale): Cv => ({
  ...profileCopy[locale],
  contactLabels: contactLabelCopy[locale],
  jobs: jobMeta.map(({ id, company }) => ({ company, ...jobCopy[locale][id] })),
  projects: projectMeta.map((meta) => ({
    ...meta,
    description: projectCopy[locale][meta.id],
  })),
  technicalSkills: technicalSkillMeta.map((group) => ({
    category: skillGroupCopy[locale][group.id],
    items: group.items,
  })),
  softSkills: softSkillCopy[locale],
  education: educationMeta.map((meta) => ({ ...meta, ...educationCopy[locale][meta.id] })),
  languages: languageCopy[locale],
})

/** The CV for every supported language, resolved by the `I18nProvider`. */
export const cvByLocale: Record<Locale, Cv> = {
  en: buildCv('en'),
  es: buildCv('es'),
}
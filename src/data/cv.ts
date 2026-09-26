/**
 * Single source of truth for all portfolio content.
 * Synced from docs/cv.md — update here when the CV changes.
 */

export const profile = {
  name: 'Osama Samarrai',
  initials: 'OS',
  title: 'Sr. Scrum Master & Frontend Developer',
  summary:
    'A seasoned MERN stack developer with a proven track record in spearheading agile projects. ' +
    'Committed to constant professional development and keen to leverage my skills in a vibrant, ' +
    'forward-thinking organization.',
  years: '7+',
} as const

export const contacts = [
  { label: 'Email', value: 'osamasamarrai@gmail.com', href: 'mailto:osamasamarrai@gmail.com', icon: 'mail' },
  { label: 'Phone', value: '+34 644 642 147', href: 'tel:+34644642147', icon: 'phone' },
  { label: 'LinkedIn', value: 'in/osama-islam', href: 'https://www.linkedin.com/in/osama-islam-40441', icon: 'linkedin' },
  { label: 'GitHub', value: 'DevOsamaIslam', href: 'https://github.com/DevOsamaIslam', icon: 'github' },
] as const

export type Job = {
  company: string
  role: string
  period: string
  location: string
  points: string[]
}

export const jobs: Job[] = [
  {
    company: 'MBL High Tech',
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
  {
    company: 'T-Systems',
    role: 'System Engineer',
    period: 'June 2018 — January 2021',
    location: 'Malaysia',
    points: [
      'Acted as the communication link between management and the engineering team.',
      'Built automation processes and bots for INM and aggregate reporting.',
      'Implemented batch resolution of events, cutting manual toil for operations.',
    ],
  },
]

export type Project = {
  name: string
  description: string
  tags: string[]
  href?: string
  featured?: boolean
}

/**
 * Repo URLs below currently point at the GitHub profile.
 * Replace `href` values with direct repo/demo links when available.
 */
const githubProfile = 'https://github.com/DevOsamaIslam/'

export const projects: Project[] = [
  {
    name: 'useSmartValue',
    description:
      'Custom React hook unifying useState and useRef behind a single, ergonomic API.',
    tags: ['React', 'TypeScript', 'Hooks'],
    href: githubProfile + 'use-smartvalue',
  },
  {
    name: 'useFilters Hook',
    description:
      'React hook that manages complex filter state and URL-synced query parameters.',
    tags: ['React', 'TypeScript', 'Hooks'],
    href: githubProfile + 'use-filters',
  },
  {
    name: 'MUI Custom Form',
    description:
      'Declarative form component combining MUI with react-hook-form validation.',
    tags: ['React', 'MUI', 'react-hook-form'],
    href: githubProfile + 'mui-custom-form',
  },
  {
    name: 'Async Handler',
    description:
      'TypeScript utility that gracefully handles both sync and async errors in one wrapper.',
    tags: ['TypeScript', 'Async', 'Utility'],
    href: githubProfile + 'async-handler-ts',
  },
  {
    name: 'Trading Bot',
    description:
      'Node.js trading bot using the KuCoin SDK with technical indicators and backtesting.',
    tags: ['Node.js', 'TypeScript', 'KuCoin SDK'],
    href: githubProfile + 'KuCoin-Advanced-Trading-Bot',
  },
  {
    name: 'PoW Blockchain',
    description:
      'Proof-of-work blockchain implemented from scratch in modular TypeScript.',
    tags: ['TypeScript', 'Blockchain', 'Cryptography'],
    href: githubProfile + 'privchain',
  },
  {
    name: 'Apologea.com',
    description:
      'Full-stack web product, live and in production — the flagship of my independent work.',
    tags: ['Full Stack', 'MERN', 'Live Site'],
    href: 'https://apologea.com',
    featured: true,
  },
]

export const technicalSkills: { category: string; items: string[] }[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Redux Toolkit', 'MUI', 'React Router', 'SASS', 'CSS-in-JS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'SQL', 'Socket.IO', 'JWT'],
  },
  {
    category: 'Testing & Quality',
    items: ['Vitest', 'Playwright', 'Selenium', 'Code Review'],
  },
  {
    category: 'Practices & Tools',
    items: ['Agile / Scrum', 'Python', 'AI-assisted Development'],
  },
]

export const softSkills = [
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
]

export const certificates = [
  { name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org', year: 2026 },
  { name: 'MERN Stack Developer — E-Degree Program', issuer: 'Eduonix', year: 2022 },
]

export const education = [
  {
    degree: 'BSc (Hons) in Software Engineering with Multimedia',
    place: 'Malaysia',
    year: '2017',
  },
  {
    degree: 'C1 in Spanish Language',
    place: 'Spain',
    year: '2026',
    current: true
  },
]

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Business' },
  { name: 'Spanish', level: 'Intermediate' },
]

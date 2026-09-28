import type { Locale } from './locales'

/**
 * Anchor ids for the single-page layout: the navbar renders one link per entry,
 * in this order, and each one must exist as an `id` in `App`.
 */
export const SECTION_IDS = [
  'home',
  'about',
  'experience',
  'projects',
  'skills',
  'credentials',
  'contact',
] as const

export type SectionId = (typeof SECTION_IDS)[number]

/** Which stat of the About grid a label belongs to. */
export type AboutStatKey = 'years' | 'roles' | 'projects' | 'certifications'

/**
 * Every string of UI chrome on the page (headings, buttons, meta tags…).
 * Narrative content lives in `data/cv.ts`; this file only holds the copy that
 * wraps it.
 */
export type Messages = {
  /** Document `<title>` and meta description, applied by the `I18nProvider`. */
  meta: { title: string; description: string }

  /** Strings that exist only for assistive technology. */
  a11y: { primaryNav: string; language: string }

  /** Navbar copy, one label per anchor in `SECTION_IDS`. */
  nav: Record<SectionId, string>

  hero: {
    greeting: string
    viewProjects: string
    emailMe: string
  }

  about: {
    kicker: string
    title: string
    stats: Record<AboutStatKey, string>
  }

  experience: {
    kicker: string
    title: string
    sub: string
  }

  projects: {
    kicker: string
    title: string
    sub: string
    live: string
    visit: string
    source: string
  }

  skills: {
    kicker: string
    title: string
    sub: string
    waysOfWorking: string
  }

  credentials: {
    kicker: string
    title: string
    certifications: string
    education: string
    languages: string
    inProgress: string
  }

  contact: {
    title: string
    body: string
  }
}

export const messages: Record<Locale, Messages> = {
  en: {
    meta: {
      title: 'Osama Samarrai — Sr. Scrum Master & Full Stack Developer',
      description:
        'Osama Samarrai — Sr. Scrum Master & Full Stack Developer. 7+ years building full-stack MERN products, leading agile teams, and shipping maintainable software.',
    },

    a11y: { primaryNav: 'Primary', language: 'Language' },

    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      credentials: 'Credentials',
      contact: 'Contact',
    },

    hero: {
      greeting: 'Hello, I’m',
      viewProjects: 'View projects',
      emailMe: 'Email me',
    },

    about: {
      kicker: 'About',
      title: 'Software, delivered the agile way',
      stats: {
        years: 'Years of experience',
        roles: 'Senior engineering roles',
        projects: 'Projects shipped',
        certifications: 'Certifications',
      },
    },

    experience: {
      kicker: 'Experience',
      title: 'Where I’ve worked',
      sub: 'Seven years of aggregate experience in the IT sector, 3 years of ITIL and 4 years of web development, shipping CRM products and running the agile ceremonies that keep delivery predictable.',
    },

    projects: {
      kicker: 'Projects',
      title: 'Things I’ve built',
      sub: 'A live full-stack product, plus the open-source hooks, utilities and Node.js projects I reach for in my own work. Every card links out to the running site or the source.',
      live: 'Live',
      visit: 'Visit the site',
      source: 'View source',
    },

    skills: {
      kicker: 'Skills',
      title: 'The stack and how I work',
      sub: 'What I build with day to day, plus the habits that keep a team moving.',
      waysOfWorking: 'Ways of working',
    },

    credentials: {
      kicker: 'Credentials',
      title: 'Certificates, education & languages',
      certifications: 'Certifications',
      education: 'Education',
      languages: 'Languages',
      inProgress: 'In progress',
    },

    contact: {
      title: 'Let’s talk',
      body: 'Open to conversations about full-stack architecture, agile delivery and anything MERN. Email is the fastest way to reach me.',
    },
  },

  es: {
    meta: {
      title: 'Osama Samarrai — Scrum Master Senior y Desarrollador Full Stack',
      description:
        'Osama Samarrai — Scrum Master Senior y Desarrollador Full Stack. Más de 7 años creando productos full-stack con el stack MERN, liderando equipos ágiles y entregando software mantenible.',
    },

    a11y: { primaryNav: 'Principal', language: 'Idioma' },

    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      credentials: 'Credenciales',
      contact: 'Contacto',
    },

    hero: {
      greeting: 'Hola, soy',
      viewProjects: 'Ver proyectos',
      emailMe: 'Escríbeme',
    },

    about: {
      kicker: 'Sobre mí',
      title: 'Software, entregado con agilidad',
      stats: {
        years: 'Años de experiencia',
        roles: 'Puestos de ingeniería senior',
        projects: 'Proyectos entregados',
        certifications: 'Certificaciones',
      },
    },

    experience: {
      kicker: 'Experiencia',
      title: 'Dónde he trabajado',
      sub: 'Siete años de experiencia acumulada en el sector TI: 3 años de ITIL y 4 años de desarrollo web, entregando productos CRM y liderando las ceremonias ágiles que mantienen la entrega predecible.',
    },

    projects: {
      kicker: 'Proyectos',
      title: 'Cosas que he construido',
      sub: 'Un producto full-stack en vivo, más los hooks, utilidades y proyectos de Node.js de código abierto que uso en mi día a día. Cada tarjeta enlaza al sitio en funcionamiento o al código fuente.',
      live: 'En vivo',
      visit: 'Visitar el sitio',
      source: 'Ver código',
    },

    skills: {
      kicker: 'Habilidades',
      title: 'El stack y cómo trabajo',
      sub: 'Con lo que construyo día a día, además de los hábitos que mantienen a un equipo en marcha.',
      waysOfWorking: 'Formas de trabajar',
    },

    credentials: {
      kicker: 'Credenciales',
      title: 'Certificados, formación e idiomas',
      certifications: 'Certificaciones',
      education: 'Formación',
      languages: 'Idiomas',
      inProgress: 'En curso',
    },

    contact: {
      title: 'Hablemos',
      body: 'Abierto a conversaciones sobre arquitectura full-stack, entrega ágil y cualquier tema relacionado con MERN. El correo es la vía más rápida para contactarme.',
    },
  },

  ar: {
    meta: {
      title: 'أسامة السامرائي — Scrum Master ومطوّر Full Stack',
      description:
        'أسامة السمرائي — Scrum Master ومطوّر Full Stack. أكثر من 7 سنوات في بناء منتجات Full Stack بمنظومة MERN، وقيادة فرق Agile، وتسليم برمجيات قابلة للصيانة.',
    },

    a11y: { primaryNav: 'التنقل الرئيسي', language: 'اللغة' },

    nav: {
      home: 'الرئيسية',
      about: 'نبذة',
      experience: 'الخبرة',
      projects: 'المشاريع',
      skills: 'المهارات',
      credentials: 'الشهادات',
      contact: 'تواصل',
    },

    hero: {
      greeting: 'مرحبًا، أنا',
      viewProjects: 'استعرِض المشاريع',
      emailMe: 'راسلني',
    },

    about: {
      kicker: 'نبذة',
      title: 'برمجيات تُسلَّم بأسلوب Agile',
      stats: {
        years: 'سنوات من الخبرة',
        roles: 'أدوار هندسية عليا',
        projects: 'مشروعًا مُسلَّمًا',
        certifications: 'شهادات معتمدة',
      },
    },

    experience: {
      kicker: 'الخبرة',
      title: 'أين عملت',
      sub: 'سبع سنوات من الخبرة المتراكمة في قطاع تقنية المعلومات: ثلاث سنوات في ITIL وأربع سنوات في تطوير الويب، بين تسليم منتجات CRM وإدارة اجتماعات Agile التي تُبقي التسليم متوقعًا.',
    },

    projects: {
      kicker: 'المشاريع',
      title: 'أشياء بنيتها',
      sub: 'منتج Full Stack يعمل فعليًا، إضافة إلى الحُزم والأدوات ومشاريع Node.js مفتوحة المصدر التي أعتمد عليها في عملي. كل بطاقة تنقلك إلى الموقع العامل أو إلى الشيفرة المصدرية.',
      live: 'قيد التشغيل',
      visit: 'زيارة الموقع',
      source: 'عرض الشيفرة',
    },

    skills: {
      kicker: 'المهارات',
      title: 'التقنيات وطريقة عملي',
      sub: 'ما أبني به يوميًا، إلى جانب العادات التي تُبقي الفريق متقدمًا.',
      waysOfWorking: 'أساليب العمل',
    },

    credentials: {
      kicker: 'الشهادات',
      title: 'الشهادات والدراسة واللغات',
      certifications: 'الشهادات',
      education: 'الدراسة',
      languages: 'اللغات',
      inProgress: 'قيد الإنجاز',
    },

    contact: {
      title: 'لنتحدّث',
      body: 'يسعدني الحديث عن هندسة Full Stack، والتسليم بأسلوب Agile، وأي موضوع يتعلق بمنظومة MERN. البريد الإلكتروني هو أسرع وسيلة للوصول إليّ.',
    },
  },
}
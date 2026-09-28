import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'

import type { Project } from '../data/cv'
import { useI18n } from '../i18n/I18nProvider'
import { externalLinkProps } from '../utils/links'
import { accents, glassHover, glassTokens } from '../theme/glass'
import { displayFont } from '../theme/theme'
import Icon from './Icon'
import Reveal from './Reveal'
import Section from './Section'
import SectionHead from './SectionHead'

const gridSx: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '18px',
}

/**
 * Base card recipe. Card itself only sets `overflow: hidden`, so the flex
 * column (and `flex: 1` on the description) is what keeps card footers aligned.
 */
const cardSx: SxProps<Theme> = {
  ...glassHover,
  display: 'flex',
  flexDirection: 'column',
  padding: '26px',
  gap: '14px',
}

const featuredCardSx: SxProps<Theme> = {
  ...cardSx,
  gridColumn: '1 / -1',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '32px',
  padding: '32px',
  background: `linear-gradient(120deg, ${accents.a}14, ${accents.b}1a), ${glassTokens.bg}`,
  '@media (max-width:820px)': {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}

const tagsSx: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '6px',
}

const visualSx: SxProps<Theme> = {
  flexShrink: 0,
  width: 220,
  height: 140,
  borderRadius: '14px',
  display: 'grid',
  placeItems: 'center',
  fontFamily: displayFont,
  fontWeight: 800,
  fontSize: 26,
  color: 'text.primary',
  background: [
    `radial-gradient(circle at 30% 20%, ${accents.a}40, transparent 60%)`,
    `radial-gradient(circle at 75% 80%, ${accents.b}40, transparent 60%)`,
    'rgba(255, 255, 255, 0.04)',
  ].join(', '),
  border: `1px solid ${glassTokens.border}`,
  '@media (max-width:820px)': { width: '100%', height: 120 },
}

function ProjectTags({ tags }: { tags: readonly string[] }) {
  return (
    <Box sx={tagsSx}>
      {tags.map((tag) => (
        <Chip key={tag} label={tag} />
      ))}
    </Box>
  )
}

function ProjectLink({ project, label }: { project: Project; label: string }) {
  if (!project.href) return null

  return (
    <Link
      href={project.href}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '13.5px',
        fontWeight: 600,
        color: 'primary.main',
        '&:hover': { textDecoration: 'underline' },
      }}
      {...externalLinkProps(project.href)}
    >
      {label}
      <Icon name="external" size={14} />
    </Link>
  )
}

export default function Projects() {
  const { t, cv } = useI18n()

  const featured = cv.projects.find((project) => project.featured)
  const openSource = cv.projects.filter((project) => !project.featured)

  return (
    <Section id="projects">
      <Container>
        <SectionHead kicker={t.projects.kicker} title={t.projects.title} sub={t.projects.sub} />

        <Box sx={gridSx}>
          {featured ? (
            <Reveal component={Card} sx={featuredCardSx}>
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    display: 'inline-block',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'warning.main',
                    mb: '10px',
                  }}
                >
                  {t.projects.live}
                </Typography>

                <Typography variant="h3" sx={{ fontSize: 17, fontWeight: 700 }}>
                  {featured.name}
                </Typography>

                <Typography sx={{ flex: 1, color: 'text.secondary', fontSize: 14 }}>
                  {featured.description}
                </Typography>

                <ProjectTags tags={featured.tags} />
                <ProjectLink project={featured} label={t.projects.visit} />
              </Box>

              <Box sx={visualSx} aria-hidden>
                {featured.name.replace(/\..*$/, '')}
              </Box>
            </Reveal>
          ) : null}

          {openSource.map((project, index) => (
            <Reveal
              key={project.name}
              component={Card}
              sx={cardSx}
              delay={index * 60}
            >
              <Typography variant="h3" sx={{ fontSize: 17, fontWeight: 700 }}>
                {project.name}
              </Typography>

              <Typography sx={{ flex: 1, color: 'text.secondary', fontSize: 14 }}>
                {project.description}
              </Typography>

              <ProjectTags tags={project.tags} />
              <ProjectLink project={project} label={t.projects.source} />
            </Reveal>
          ))}
        </Box>
      </Container>
    </Section>
  )
}


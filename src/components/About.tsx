import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'

import { certificates, profile } from '../data/cv'
import { useI18n } from '../i18n/I18nProvider'
import { accents, glassTokens } from '../theme/glass'
import Reveal from './Reveal'
import Section from './Section'
import SectionHead from './SectionHead'

const statsGridSx: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '16px',
  mt: '28px',
  pt: '28px',
  borderTop: `1px solid ${glassTokens.border}`,
}

const statValueSx: SxProps<Theme> = {
  display: 'block',
  fontSize: 'clamp(22px, 3vw, 28px)',
  fontWeight: 800,
  backgroundImage: `linear-gradient(120deg, ${accents.a}, ${accents.b})`,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

export default function About() {
  const { t, cv } = useI18n()

  // Counts come from the active locale's CV, so the numbers always match the
  // timeline and project grid below; only the labels are translated.
  const stats = [
    { key: 'years', value: profile.years },
    { key: 'roles', value: `${cv.jobs.length}` },
    { key: 'projects', value: `${cv.projects.length}` },
    { key: 'certifications', value: `${certificates.length}` },
  ] as const

  return (
    <Section id="about">
      <Container>
        <SectionHead kicker={t.about.kicker} title={t.about.title} />

        <Reveal
          component={Card}
          sx={{ p: 'clamp(28px, 4vw, 44px)', color: 'text.secondary' }}
        >
          <Typography>{cv.summary}</Typography>

          <Box sx={statsGridSx}>
            {stats.map((stat) => (
              <Box key={stat.key}>
                <Typography variant="h3" component="strong" sx={statValueSx}>
                  {stat.value}
                </Typography>
                <Typography
                  component="span"
                  sx={{ display: 'block', mt: '2px', fontSize: 13, color: 'text.disabled' }}
                >
                  {t.about.stats[stat.key]}
                </Typography>
              </Box>
            ))}
          </Box>
        </Reveal>
      </Container>
    </Section>
  )
}


import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'

import { certificates, jobs, profile, projects } from '../data/cv'
import { accents, glassTokens } from '../theme/glass'
import Reveal from './Reveal'
import Section from './Section'
import SectionHead from './SectionHead'

const stats = [
  { value: profile.years, label: 'Years of experience' },
  { value: `${jobs.length}`, label: 'Senior engineering roles' },
  { value: `${projects.length}`, label: 'Projects shipped' },
  { value: `${certificates.length}`, label: 'Certifications' },
]

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
  return (
    <Section id="about">
      <Container>
        <SectionHead kicker="About" title="Software, delivered the agile way" />

        <Reveal
          component={Card}
          sx={{ p: 'clamp(28px, 4vw, 44px)', color: 'text.secondary' }}
        >
          <Typography>{profile.summary}</Typography>

          <Box sx={statsGridSx}>
            {stats.map((stat) => (
              <Box key={stat.label}>
                <Typography variant="h3" component="strong" sx={statValueSx}>
                  {stat.value}
                </Typography>
                <Typography
                  component="span"
                  sx={{ display: 'block', mt: '2px', fontSize: 13, color: 'text.disabled' }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Reveal>
      </Container>
    </Section>
  )
}


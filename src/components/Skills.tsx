import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'

import { useI18n } from '../i18n/I18nProvider'
import { glassHover } from '../theme/glass'
import Reveal from './Reveal'
import Section from './Section'
import SectionHead from './SectionHead'

const gridSx: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '18px',
}

const chipRowSx: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
}

export default function Skills() {
  const { t, cv } = useI18n()

  return (
    <Section id="skills">
      <Container>
        <SectionHead kicker={t.skills.kicker} title={t.skills.title} sub={t.skills.sub} />

        <Box sx={gridSx}>
          {cv.technicalSkills.map((group, index) => (
            <Reveal
              key={group.category}
              component={Card}
              sx={{ ...glassHover, padding: '24px' }}
              delay={index * 60}
            >
              <Typography
                variant="h3"
                sx={(theme) => ({
                  fontSize: 15,
                  fontWeight: 700,
                  // Tracking breaks the joining script; see SectionHead.
                  letterSpacing: theme.direction === 'rtl' ? 0 : '0.02em',
                  mb: '14px',
                })}
              >
                {group.category}
              </Typography>

              <Box sx={chipRowSx}>
                {group.items.map((item) => (
                  <Chip key={item} label={item} />
                ))}
              </Box>
            </Reveal>
          ))}
        </Box>

        <Reveal>
          <Typography
            variant="h3"
            sx={(theme) => ({
              margin: '34px 0 0',
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: theme.direction === 'rtl' ? 0 : '0.02em',
            })}
          >
            {t.skills.waysOfWorking}
          </Typography>
        </Reveal>

        <Reveal sx={{ ...chipRowSx, mt: '18px' }}>
          {cv.softSkills.map((skill) => (
            <Chip key={skill} label={skill} />
          ))}
        </Reveal>
      </Container>
    </Section>
  )
}


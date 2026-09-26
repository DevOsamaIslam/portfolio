import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'

import { softSkills, technicalSkills } from '../data/cv'
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
  return (
    <Section id="skills">
      <Container>
        <SectionHead
          kicker="Skills"
          title="The stack and how I work"
          sub="What I build with day to day, plus the habits that keep a team moving."
        />

        <Box sx={gridSx}>
          {technicalSkills.map((group, index) => (
            <Reveal
              key={group.category}
              component={Card}
              sx={{ ...glassHover, padding: '24px' }}
              delay={index * 60}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: 15,
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  mb: '14px',
                }}
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
            sx={{
              margin: '34px 0 0',
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            Ways of working
          </Typography>
        </Reveal>

        <Reveal sx={{ ...chipRowSx, mt: '18px' }}>
          {softSkills.map((skill) => (
            <Chip key={skill} label={skill} />
          ))}
        </Reveal>
      </Container>
    </Section>
  )
}


import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'

import { jobs } from '../data/cv'
import { accents, glassHover } from '../theme/glass'
import Reveal from './Reveal'
import Section from './Section'
import SectionHead from './SectionHead'

/** The vertical rail the timeline dots sit on. */
const timelineSx: SxProps<Theme> = {
  position: 'relative',
  pl: '28px',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '5px',
    top: '8px',
    bottom: '8px',
    width: '2px',
    background: `linear-gradient(to bottom, ${accents.a}, ${accents.b}, transparent)`,
    opacity: 0.5,
  },
}

/**
 * `overflow: visible` is required so the dot can sit out in the timeline rail;
 * Card clips by default.
 */
const timelineItemSx: SxProps<Theme> = {
  ...glassHover,
  overflow: 'visible',
  padding: '26px 28px',
  mb: '20px',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '-28px',
    top: '34px',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: accents.a,
    boxShadow: `0 0 0 4px ${alpha(accents.a, 0.15)}, 0 0 14px ${alpha(accents.a, 0.5)}`,
  },
}

const jobHeadSx: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'baseline',
  gap: '8px 14px',
}

const jobPointsSx: SxProps<Theme> = {
  margin: '16px 0 0',
  padding: 0,
  listStyle: 'none',
  display: 'grid',
  gap: '8px',
  '& li': {
    position: 'relative',
    paddingLeft: '18px',
    color: 'text.secondary',
    fontSize: '14.5px',
    '&::before': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '9px',
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: accents.b,
      opacity: 0.8,
    },
  },
}

export default function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionHead
          kicker="Experience"
          title="Where I’ve worked"
          sub="Seven years of aggregate experience in the IT sector, 3 years of ITIL and 4 years of web development, shipping CRM products and running the agile ceremonies that keep delivery predictable."
        />

        <Box sx={timelineSx}>
          {jobs.map((job, index) => (
            <Reveal
              key={`${job.company}-${job.role}`}
              component={Card}
              sx={timelineItemSx}
              delay={index * 80}
            >
              <Box sx={jobHeadSx}>
                <Typography variant="h3" sx={{ fontSize: 18, fontWeight: 700 }}>
                  {job.role}
                </Typography>
                <Typography sx={{ fontSize: 15, color: 'primary.main', fontWeight: 600 }}>
                  {job.company}
                </Typography>
                <Typography
                  sx={{
                    ml: 'auto',
                    fontSize: 13,
                    color: 'text.disabled',
                    '@media (max-width:820px)': { ml: 0, width: '100%' },
                  }}
                >
                  {job.period}
                </Typography>
                <Typography sx={{ fontSize: 13, color: 'text.disabled', width: '100%' }}>
                  {job.location}
                </Typography>
              </Box>

              <Box component="ul" sx={jobPointsSx}>
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </Box>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Section>
  )
}


import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import type { SxProps, Theme } from '@mui/material/styles'

import { certificates, education, languages } from '../data/cv'
import { glassHover, glassTokens } from '../theme/glass'
import Reveal from './Reveal'
import Section from './Section'
import SectionHead from './SectionHead'

const gridSx: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '18px',
}

const cardSx: SxProps<Theme> = { ...glassHover, padding: '26px' }

const itemSx: SxProps<Theme> = {
  py: '12px',
  borderTop: `1px solid ${glassTokens.border}`,
  '&:first-of-type': { borderTop: 'none', pt: 0 },
}

const itemNameSx: SxProps<Theme> = { fontSize: '14.5px', fontWeight: 600 }
const itemMetaSx: SxProps<Theme> = { fontSize: 13, color: 'text.disabled', mt: '2px' }

export default function Credentials() {
  return (
    <Section id="credentials">
      <Container>
        <SectionHead
          kicker="Credentials"
          title="Certificates, education & languages"
        />

        <Box sx={gridSx}>
          <Reveal component={Card} sx={cardSx}>
            <Typography variant="h3" sx={{ fontSize: 15, fontWeight: 700, mb: '16px' }}>
              Certifications
            </Typography>

            {certificates.map((certificate) => (
              <Box sx={itemSx} key={certificate.name}>
                <Typography sx={itemNameSx}>{certificate.name}</Typography>
                <Typography sx={itemMetaSx}>
                  {certificate.issuer} · {certificate.year}
                </Typography>
              </Box>
            ))}
          </Reveal>

          <Reveal component={Card} sx={cardSx} delay={80}>
            <Typography variant="h3" sx={{ fontSize: 15, fontWeight: 700, mb: '16px' }}>
              Education
            </Typography>

            {education.map((entry) => (
              <Box sx={itemSx} key={entry.degree}>
                <Typography sx={itemNameSx}>{entry.degree}</Typography>
                <Typography sx={itemMetaSx}>
                  {entry.place} · {entry.year}
                  {'current' in entry && entry.current ? ' · In progress' : ''}
                </Typography>
              </Box>
            ))}
          </Reveal>

          <Reveal component={Card} sx={cardSx} delay={160}>
            <Typography variant="h3" sx={{ fontSize: 15, fontWeight: 700, mb: '16px' }}>
              Languages
            </Typography>

            {languages.map((language) => (
              <Box sx={itemSx} key={language.name}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <Typography sx={itemNameSx}>{language.name}</Typography>
                  <Typography sx={{ ...itemMetaSx, mt: 0 }}>{language.level}</Typography>
                </Box>
              </Box>
            ))}
          </Reveal>
        </Box>
      </Container>
    </Section>
  )
}


import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'

import { contacts } from '../data/cv'
import { externalLinkProps, isExternalLink } from '../utils/links'
import { accents, glassTokens } from '../theme/glass'
import Icon from './Icon'
import Reveal from './Reveal'
import Section from './Section'

const pillSx: SxProps<Theme> = {
  borderRadius: 999,
  px: '18px',
  py: '11px',
  gap: '10px',
  fontSize: 14,
  fontWeight: 500,
  color: 'text.secondary',
  '& svg': { color: 'primary.main' },
  '&:hover': {
    background: glassTokens.bg,
    color: 'text.primary',
    borderColor: alpha(accents.a, 0.4),
  },
}

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Reveal
          component={Card}
          sx={{ p: 'clamp(32px, 5vw, 56px)', textAlign: 'center' }}
        >
          <Typography variant="h2" sx={{ fontSize: 'clamp(26px, 4vw, 34px)' }}>
            Let’s talk
          </Typography>

          <Typography
            sx={{
              mt: '12px',
              color: 'text.secondary',
              maxWidth: 560,
              mx: 'auto',
            }}
          >
            Open to conversations about frontend architecture, agile delivery and
            anything MERN. Email is the fastest way to reach me.
          </Typography>

          <Stack
            direction="row"
            useFlexGap
            spacing="12px"
            sx={{ flexWrap: 'wrap', justifyContent: 'center', mt: '28px' }}
          >
            {contacts.map((contact) => (
              <Button
                key={contact.label}
                variant="outlined"
                href={contact.href}
                sx={pillSx}
                startIcon={<Icon name={contact.icon} size={16} />}
                endIcon={
                  isExternalLink(contact.href) ? <Icon name="external" size={13} /> : undefined
                }
                {...externalLinkProps(contact.href)}
              >
                {contact.value}
              </Button>
            ))}
          </Stack>
        </Reveal>
      </Container>
    </Section>
  )
}


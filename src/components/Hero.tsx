import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'

import { contacts, profile } from '../data/cv'
import { useI18n } from '../i18n/I18nProvider'
import { externalLinkProps } from '../utils/links'
import { accents, glassTokens } from '../theme/glass'
import { displayFont } from '../theme/theme'
import Icon from './Icon'
import Reveal from './Reveal'

/** The whole hero is one (large) pane of frosted glass. */
const heroCardSx: SxProps<Theme> = {
  p: 'clamp(32px, 5vw, 56px)',
  display: 'flex',
  alignItems: 'center',
  gap: 'clamp(28px, 5vw, 56px)',
  '@media (max-width:820px)': {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start',
  },
}

const nameSx: SxProps<Theme> = {
  backgroundImage: `linear-gradient(120deg, #fff 30%, ${accents.a} 70%, ${accents.b})`,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

const badgeSx: SxProps<Theme> = {
  flexShrink: 0,
  width: 132,
  height: 132,
  borderRadius: '32px',
  display: 'grid',
  placeItems: 'center',
  fontFamily: displayFont,
  fontSize: 44,
  fontWeight: 800,
  color: 'primary.main',
  background: `linear-gradient(135deg, ${alpha(accents.a, 0.16)}, ${alpha(accents.b, 0.16)})`,
  border: `1px solid ${glassTokens.border}`,
  boxShadow: `${glassTokens.inner}, 0 0 40px ${alpha(accents.a, 0.12)}`,
  '@media (max-width:820px)': {
    width: 96,
    height: 96,
    borderRadius: '24px',
    fontSize: 34,
  },
}

export default function Hero() {
  const { t, cv } = useI18n()
  const email = contacts.find((contact) => contact.icon === 'mail')

  return (
    <Box component="section" id="home" sx={{ pt: '96px', pb: '88px' }}>
      <Container>
        <Reveal component={Card} sx={heroCardSx}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ color: 'text.secondary', fontSize: 15, mb: '8px' }}>
              {t.hero.greeting}
            </Typography>

            <Typography variant="h1" sx={nameSx}>
              {profile.name}
            </Typography>

            <Typography
              sx={{
                mt: '10px',
                fontSize: 'clamp(16px, 2.2vw, 20px)',
                fontWeight: 600,
                color: 'text.secondary',
              }}
            >
              {cv.title}
            </Typography>

            <Typography sx={{ mt: '18px', color: 'text.secondary', maxWidth: 560 }}>
              {cv.summary}
            </Typography>

            <Stack
              direction="row"
              useFlexGap
              spacing="14px"
              sx={{ flexWrap: 'wrap', mt: '28px' }}
            >
              <Button
                variant="contained"
                href="#projects"
                endIcon={<Icon name="arrow-right" size={17} />}
              >
                {t.hero.viewProjects}
              </Button>

              {email ? (
                <Button
                  variant="outlined"
                  href={email.href}
                  startIcon={<Icon name="mail" size={17} />}
                >
                  {t.hero.emailMe}
                </Button>
              ) : null}
            </Stack>

            <Stack
              direction="row"
              useFlexGap
              spacing="10px"
              sx={{ flexWrap: 'wrap', mt: '28px' }}
            >
              {contacts.map((contact) => (
                <Chip
                  key={contact.icon}
                  component="a"
                  clickable
                  href={contact.href}
                  title={`${cv.contactLabels[contact.icon]}: ${contact.value}`}
                  icon={<Icon name={contact.icon} size={15} />}
                  label={contact.value}
                  {...externalLinkProps(contact.href)}
                />
              ))}
            </Stack>
          </Box>

          <Box sx={badgeSx} aria-hidden>
            {profile.initials}
          </Box>
        </Reveal>
      </Container>
    </Box>
  )
}


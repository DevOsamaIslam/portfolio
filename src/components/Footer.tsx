import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { profile } from '../data/cv'
import { useI18n } from '../i18n/I18nProvider'
import { glassTokens } from '../theme/glass'

export default function Footer() {
  const { cv } = useI18n()
  const year = new Date().getFullYear()

  return (
    <Box component="footer" sx={{ py: '32px', borderTop: `1px solid ${glassTokens.border}` }}>
      <Container>
        <Stack
          direction="row"
          useFlexGap
          spacing="24px"
          sx={{
            flexWrap: 'wrap',
            rowGap: '8px',
            alignItems: 'center',
            justifyContent: 'space-between',
            color: 'text.disabled',
            fontSize: 13,
          }}
        >
          <Typography component="span" sx={{ fontSize: 'inherit', color: 'inherit' }}>
            © {year} {profile.name}
          </Typography>
          <Typography component="span" sx={{ fontSize: 'inherit', color: 'inherit' }}>
            {cv.title}
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}


import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import Reveal from './Reveal'

type SectionHeadProps = {
  /** Small uppercase accent label above the title. */
  kicker: string
  title: string
  /** Optional lead paragraph under the title. */
  sub?: string
}

/**
 * Shared section intro (kicker + title + optional sub). Keeps the type scale
 * and spacing identical across every section without repeating `sx` objects.
 */
export default function SectionHead({ kicker, title, sub }: SectionHeadProps) {
  return (
    <Reveal>
      <Box sx={{ mb: '40px' }}>
        <Typography
          component="span"
          sx={{
            display: 'inline-block',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'primary.main',
            mb: '10px',
          }}
        >
          {kicker}
        </Typography>

        <Typography variant="h2">{title}</Typography>

        {sub ? (
          <Typography sx={{ mt: '10px', color: 'text.secondary', maxWidth: 640 }}>
            {sub}
          </Typography>
        ) : null}
      </Box>
    </Reveal>
  )
}

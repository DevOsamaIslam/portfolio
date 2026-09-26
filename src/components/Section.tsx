import type { ReactNode } from 'react'
import Box from '@mui/material/Box'

type SectionProps = {
  /** Anchor id targeted by the navbar links. */
  id: string
  children: ReactNode
}

/**
 * Page section with the shared vertical rhythm (88px, tightened to 64px below
 * 820px) so every section lines up without repeating the padding in `sx`.
 */
export default function Section({ id, children }: SectionProps) {
  return (
    <Box
      component="section"
      id={id}
      sx={{ py: '88px', '@media (max-width:820px)': { py: '64px' } }}
    >
      {children}
    </Box>
  )
}

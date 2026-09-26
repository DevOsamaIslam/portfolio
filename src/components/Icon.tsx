import type { ElementType } from 'react'
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'
import MailOutlineRounded from '@mui/icons-material/MailOutlineRounded'
import OpenInNewRounded from '@mui/icons-material/OpenInNewRounded'
import type { SvgIconProps } from '@mui/material/SvgIcon'

export type IconName =
  | 'mail'
  | 'linkedin'
  | 'github'
  | 'external'
  | 'arrow-right'

/** String key -> `@mui/icons-material` component, so `data/cv.ts` stays declarative. */
const icons: Record<IconName, ElementType<SvgIconProps>> = {
  mail: MailOutlineRounded,
  linkedin: LinkedIn,
  github: GitHub,
  external: OpenInNewRounded,
  'arrow-right': ArrowForwardRounded,
}

type IconProps = Omit<SvgIconProps, 'children' | 'sx'> & {
  name: IconName
  /** Icon size in px; mapped to `fontSize` so it scales with the surrounding text. */
  size?: number
}

/**
 * Thin wrapper over the MUI icon set that keeps the string-keyed icon API the
 * content layer already uses. Icons inherit `currentColor` and are decorative
 * by default, so a text label is never announced twice by a screen reader.
 */
export default function Icon({ name, size = 18, ...rest }: IconProps) {
  const IconComponent = icons[name]

  return (
    <IconComponent
      aria-hidden
      focusable="false"
      sx={{ fontSize: size }}
      {...rest}
    />
  )
}


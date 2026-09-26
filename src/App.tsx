import Box from '@mui/material/Box'
import type { SxProps, Theme } from '@mui/material/styles'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

/** Fixed, behind-everything layer that holds the three drifting accent orbs. */
const orbsSx: SxProps<Theme> = {
  position: 'fixed',
  inset: 0,
  zIndex: -1,
  overflow: 'hidden',
  pointerEvents: 'none',
  '@keyframes drift': {
    from: { transform: 'translate(0, 0) scale(1)' },
    to: { transform: 'translate(60px, -50px) scale(1.12)' },
  },
  '@media (prefers-reduced-motion: reduce)': {
    '& .orb': { animation: 'none' },
  },
}

const orbSx: SxProps<Theme> = {
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(90px)',
  opacity: 0.5,
  animation: 'drift 22s ease-in-out infinite alternate',
}

export default function App() {
  return (
    <>
      <Box aria-hidden sx={orbsSx}>
        <Box
          className="orb"
          sx={{
            ...orbSx,
            width: 520,
            height: 520,
            top: -160,
            left: -120,
            background:
              'radial-gradient(circle, rgba(167, 139, 250, 0.4), transparent 70%)',
          }}
        />
        <Box
          className="orb"
          sx={{
            ...orbSx,
            width: 440,
            height: 440,
            bottom: -140,
            right: -100,
            background:
              'radial-gradient(circle, rgba(110, 231, 216, 0.32), transparent 70%)',
            animationDelay: '-8s',
          }}
        />
        <Box
          className="orb"
          sx={{
            ...orbSx,
            width: 320,
            height: 320,
            top: '45%',
            left: '55%',
            background:
              'radial-gradient(circle, rgba(251, 191, 36, 0.18), transparent 70%)',
            animationDelay: '-14s',
          }}
        />
      </Box>

      <Navbar />

      <Box component="main">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </Box>

      <Footer />
    </>
  )
}


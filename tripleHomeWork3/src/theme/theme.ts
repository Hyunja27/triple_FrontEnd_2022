import { createStitches, keyframes } from '@stitches/react'

// size settings for several devices
const size = {
  mobile: '770px',
  tabletS: '1023px',
  tabletM: '1220px',
  tabletL: '1280px',
  laptop: '1460px',
  desktop: '1700px',
}

const theme = {
  mobile: `(max-width: ${size.mobile})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tabletM: `(max-width: ${size.tabletM})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
}

export const { styled, css } = createStitches({
  media: {
    mobile: theme.mobile,
    tabletS: theme.tabletS,
    tabletM: theme.tabletM,
    tabletL: theme.tabletL,
    laptop: theme.laptop,
    desktop: theme.desktop,
  },
})

export const fadeIn = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translate3d(0, 10%, 0)',
  },
  '100%': {
    opacity: '1',
  },
})

export const hr = styled('hr', {
  border: '1px solid transparent',
  marginTop: '-5px',
  marginBottom: '20px',
})

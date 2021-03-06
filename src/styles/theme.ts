import {ThemeProvider} from 'styled-components'

const screenSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const theme = {
  text: {},
  colors: {
    black: '#000',
    red: '#e62429',
    white: '#fff',
    disabled: '#919194',
    overlay: '#000000d9'
  },
  fonts: [],
  fontSizes: {
    sm: '16px',
    md: '24px',
    lg: '36px',
    xl: '48px',
    xxl: '72px'
  },
  device: {
    mobileS: `(max-width: ${screenSizes.mobileS})`,
    mobileM: `(max-width: ${screenSizes.mobileM})`,
    mobileL: `(max-width: ${screenSizes.mobileL})`,
    tablet: `(max-width: ${screenSizes.tablet})`,
    laptop: `(max-width: ${screenSizes.laptop})`,
    laptopL: `(max-width: ${screenSizes.laptopL})`,
    desktop: `(max-width: ${screenSizes.desktop})`,
    desktopL: `(max-width: ${screenSizes.desktop})`
  }
}

export default theme
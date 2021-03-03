import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  text: {},
  colors: {
    black: '#000',
    red: '#ff0000',
  },
  fonts: [],
  fontSizes: {
    sm: '16px',
    md: '24px',
    lg: '36px'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
import { ThemeProvider } from 'styled-components'

export function em(value, base = 16) {
  return value / base
}

export const themes = {
  breakpoints: {
    md: em(640),
    lg: em(960),
    x_lg: em(1312),
  },
}

export const ThemeStyleProvider = (...props) => (
  <ThemeProvider theme={themes} {...props} />
)

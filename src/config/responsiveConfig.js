const breakpoint = {
  md: 40, // 640px
  lg: 60, // 960px
  x_lg: 82, // 1312px
}

export const device = {
  md: `(min-width: ${breakpoint.md}em)`,
  lg: `(min-width: ${breakpoint.lg}em)`,
  x_lg: `(min-width: ${breakpoint.x_lg}em)`,
}

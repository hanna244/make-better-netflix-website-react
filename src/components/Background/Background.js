import React from 'react'
import { BackgroundStyle } from './Background.style'

const Background = ({ as, className, children, ...reatProps }) => {
  return (
    <BackgroundStyle as={as} className={className} {...reatProps}>
      {children}
    </BackgroundStyle>
  )
}

export default Background

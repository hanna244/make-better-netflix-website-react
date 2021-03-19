import React from 'react'
import { BackgroundStyle } from './Background.style'

const Background = ({ dim = false, as, className, children, ...reatProps }) => {
  return (
    <BackgroundStyle dim={dim} as={as} className={className} {...reatProps}>
      {children}
    </BackgroundStyle>
  )
}

export default Background

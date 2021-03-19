import React from 'react'
import { string } from 'prop-types'
import { BackgroundStyle } from './Background.style'

const Background = ({
  dim = false,
  as = 'div',
  className,
  children,
  ...reatProps
}) => {
  return (
    <BackgroundStyle dim={dim} as={as} className={className} {...reatProps}>
      {children}
    </BackgroundStyle>
  )
}

Background.propTypes = {
  as: string.isRequired,
}

export default Background

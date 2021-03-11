import React from 'react'
import { Photo as PhotoStyle } from './Photo.style'

function Photo({ children, size, rwd = false, ...restProps }) {
  return (
    <PhotoStyle rwd={rwd} {...size} {...restProps}>
      {children}
    </PhotoStyle>
  )
}

export default Photo

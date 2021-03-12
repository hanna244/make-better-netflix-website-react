import React from 'react'

function Photo({ className, size, alt, rwd, ...restProps }) {
  return (
    <img
      rwd={rwd ?? rwd}
      className={className}
      alt={alt}
      {...size}
      {...restProps}
    />
  )
}

export default Photo

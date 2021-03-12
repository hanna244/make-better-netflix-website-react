import React from 'react'

function Photo({ className, size, alt, rwd = 'false', ...restProps }) {
  return (
    <img rwd={rwd} className={className} alt={alt} {...size} {...restProps} />
  )
}

export default Photo

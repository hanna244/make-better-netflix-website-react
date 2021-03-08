import React from 'react'
import { LinkButton } from './Link.style'

const Link = ({ children, ...restProps }) => {
  return (
    <LinkButton {...restProps} type="button">
      {children}
    </LinkButton>
  )
}

export default Link

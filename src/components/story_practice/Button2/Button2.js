import React from 'react'
import { ButtonStyle } from './Button2.style'

const Button2 = (props) => {
  const { children, ...restProps } = props
  return (
    <ButtonStyle className="button" {...restProps}>
      {children}
    </ButtonStyle>
  )
}

export default Button2

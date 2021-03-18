import React from 'react'
import { ButtonStyle } from './Button.style'

const Button = ({ tag, size = 'small', label, ...restProps }) => {
  return (
    <ButtonStyle size={size} as={tag} type="button" {...restProps}>
      {label}
    </ButtonStyle>
  )
}

export default Button

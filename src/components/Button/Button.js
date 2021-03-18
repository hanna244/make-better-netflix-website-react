import React from 'react'
import { ButtonStyle } from './Button.style'

const Button = ({ tag, label, ...restProps }) => {
  return (
    <ButtonStyle as={tag} type="button" {...restProps}>
      {label}
    </ButtonStyle>
  )
}

export default Button

import React from 'react'
import { LoginButtonStyle } from './LoginButton.style'

const LoginButton = ({
  bgColor,
  fgColor,
  tag = 'button',
  size = 'small',
  label,
  ...restProps
}) => {
  const customStyle = {
    background: bgColor ?? null,
    color: fgColor ?? null,
  }

  return (
    <LoginButtonStyle
      style={customStyle}
      size={size}
      as={tag}
      type="button"
      {...restProps}
    >
      {label}
    </LoginButtonStyle>
  )
}

export default LoginButton

import React from 'react'
// import { string } from 'prop-types'
import {
  FormContainer,
  InputStyle,
  LabelStyle,
  AlertStyle,
} from './Input.style'

const Input = ({
  bgColor,
  fgColor,
  label,
  type,
  id,
  error,
  alertMessege,
  ...restProps
}) => {
  const { background, color } = {
    background: { background: bgColor ?? null },
    color: { color: fgColor ?? null },
  }
  return (
    <>
      <FormContainer style={color} {...restProps}>
        <InputStyle style={background} type={type} id={id} />
        <LabelStyle htmlFor={id}>{label}</LabelStyle>
      </FormContainer>
      {error ? <AlertStyle role="alert">{alertMessege}</AlertStyle> : null}
    </>
  )
}

Input.defaultProps = {
  error: false,
}

export default Input

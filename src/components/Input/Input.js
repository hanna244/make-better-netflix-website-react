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
  valid,
  invalid,
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
      <FormContainer invalid style={color} {...restProps}>
        <InputStyle valid style={background} type={type} id={id} />
        <LabelStyle valid htmlFor={id}>
          {label}
        </LabelStyle>
      </FormContainer>
      {error ? <AlertStyle role="alert">{alertMessege}</AlertStyle> : null}
    </>
  )
}

Input.defaultProps = {
  error: false,
  valid: false,
  invalid: false,
}

export default Input

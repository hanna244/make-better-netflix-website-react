import React, { useState } from 'react'
import classNames from 'classnames'
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
  context,
  valid,
  invalid,
  minLength,
  maxLength,
  error,
  alertMessege,
  ...restProps
}) => {
  const [value, setValue] = useState(context)

  const handleInputValueChange = (e) => {
    setValue(e.target.value)
  }

  const inputClass = classNames(
    'inputValidInvalid',
    invalid ? 'inputInvalid' : null
  )

  const { background, color } = {
    background: { background: bgColor ?? null },
    color: { color: fgColor ?? null },
  }
  return (
    <>
      <FormContainer invalid style={color} {...restProps}>
        <InputStyle
          valid={valid}
          invalid={invalid}
          style={background}
          type={type}
          value={value}
          className={inputClass}
          minLength={minLength}
          maxLength={maxLength}
          id={id}
          onChange={handleInputValueChange}
        />
        <LabelStyle htmlFor={id}>{label}</LabelStyle>
      </FormContainer>
      {error ? <AlertStyle role="alert">{alertMessege}</AlertStyle> : null}
    </>
  )
}

Input.defaultProps = {
  error: false,
  valid: false,
  invalid: false,
  isNormal: false,
  context: '',
  minLength: 4,
  maxLength: 60,
}

export default Input

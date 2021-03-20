import React, { useState } from 'react'
import classNames from 'classnames'
import { string, bool } from 'prop-types'
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
  name,
  context,
  valid,
  invalid,
  dark,
  minLength,
  maxLength,
  error,
  errorMessege,
  ...restProps
}) => {
  const [value, setValue] = useState(context)

  const handleInputValueChange = (e) => {
    setValue(e.target.value)
  }

  const inputClass = classNames(
    valid || invalid ? 'inputValidInvalid' : null,
    invalid ? 'inputInvalid' : null
  )

  const { background, color } = {
    background: { background: bgColor ?? null },
    color: { color: fgColor ?? null },
  }
  return (
    <>
      <FormContainer invalid {...restProps}>
        <InputStyle
          valid={valid}
          invalid={invalid}
          style={background}
          type={type}
          value={value}
          className={inputClass}
          name={name}
          minLength={minLength}
          maxLength={maxLength}
          id={id}
          dark={dark}
          onChange={handleInputValueChange}
        />
        <LabelStyle style={color} htmlFor={id}>
          {label}
        </LabelStyle>
      </FormContainer>
      {error ? <AlertStyle role="alert">{errorMessege}</AlertStyle> : null}
    </>
  )
}

Input.defaultProps = {
  // error: false,
  // valid: false,
  // invalid: false,
  // dark: false,
  // isNormal: false,
  // context: '',
  // minLength: 4,
  // maxLength: 60,
}

Input.propTypes = {
  /** 식별 가능한 고유 아이디 설정은 **필수**입니다. */
  id: string.isRequired,
  /** 사용자에게 정보를 제공할 레이블 설정은 **필수**입니다. 비록 화면에 표시되지는 않더라도 스크린 리더 사용자에게 정보를 제공하기 때문입니다. */
  label: string.isRequired,
  /** 폼 컨트롤 시, 사용자가 입력한 값과 매칭되는 네임 값을 설정합니다. */
  name: string,
  /** 폼의 다크/라이트 모드를 설정할 수 있습니다. */
  dark: bool,
}

export default Input

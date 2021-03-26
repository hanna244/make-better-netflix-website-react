import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { string, bool, number, oneOf } from 'prop-types'
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
  initialValue,
  valid,
  invalid,
  darkmode,
  minLength,
  maxLength,
  errorMessege,
  ...restProps
}) => {
  const { onInputComplete } = restProps
  const [value, setValue] = useState(initialValue)

  const handleInputValueChange = (e) => {
    setValue(e.target.value)
  }
  // 아래 코드가 적절한지 드는 의문 2가지
  // 1) 클래스 컴포넌트의 setState()의 두번째 인자인 callback()함수 기능을 사용하고 싶어서
  // 함수 컴포넌트에서 useEffet()를 사용한 건데 적절한 사용인지?
  // 2) 종속성배열 설정시 value하나만 설정하면 경고가 뜨는데 왜 이벤트 함수까지 설정해야하는 건지?
  // 변경을 감지할 필요가 있는 것은 value 뿐인데?
  useEffect(() => {
    onInputComplete(value)
    return () => {
      onInputComplete()
    }
  }, [onInputComplete, value])

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
          darkmode={darkmode}
          onChange={handleInputValueChange}
        />
        <LabelStyle darkmode={darkmode} style={color} htmlFor={id}>
          {label}
        </LabelStyle>
      </FormContainer>
      {invalid ? <AlertStyle role="alert">{errorMessege}</AlertStyle> : null}
    </>
  )
}

Input.defaultProps = {
  valid: false,
  invalid: false,
  darkmode: false,
  initialValue: '',
}

Input.propTypes = {
  /** 식별 가능한 고유 아이디 설정은 **필수**입니다. */
  id: string.isRequired,
  /** 사용자에게 정보를 제공할 레이블 설정은 **필수**입니다. 비록 화면에 표시되지는 않더라도 스크린 리더 사용자에게 정보를 제공하기 때문입니다. */
  label: string.isRequired,
  /** 폼 컨트롤 시, 사용자가 입력한 값과 매칭되는 네임 값을 설정합니다. */
  name: string,
  /** 인풋의 다크 모드를 설정할 수 있습니다. */
  darkmode: bool,
  /** 인풋의 배경색을 설정합니다. */
  bgColor: string,
  /** 인풋의 전경색을 설정합니다. */
  fgColor: string,
  /** 인풋의 타입을 설정합니다. */
  type: oneOf(['email', 'text', 'password']),
  /** 화면에 표시 할 초기 입력 값을 설정할 수 있습니다. */
  initialValue: string,
  /** 인풋을 활성화 합니다. */
  valid: bool,
  /** 인풋을 비활성화 합니다. */
  invalid: bool,
  /** 패스워드 모드 시 최소 입력 글자 수를 설정합니다. */
  minLength: number,
  /** 패스워드 모드 시 최대 입력 글자 수를 설정합니다. */
  maxLength: number,
  /** 오류를 전달 받으면 메시지를 화면에 표시합니다. */
  errorMessege: string,
}

export default Input

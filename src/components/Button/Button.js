import React from 'react'
import { ButtonStyle } from './Button.style'
import { oneOf, bool, string, func } from 'prop-types'

const Button = ({
  bgColor,
  fgColor,
  tag = 'button',
  size = 'medium',
  label,
  ...restProps
}) => {
  const customStyle = {
    background: bgColor ?? null,
    color: fgColor ?? null,
  }

  return (
    <ButtonStyle
      style={customStyle}
      size={size}
      as={tag}
      type="button"
      {...restProps}
    >
      {label}
    </ButtonStyle>
  )
}

Button.propTypes = {
  /** 버튼 또는 링크(a)로 변경하여 활용할 수 있습니다. */
  tag: oneOf(['button', 'a']),
  /** 버튼 모드를 Secondary 변경 유무를 설정합니다. */
  size: oneOf(['samll', 'medium']),
  /** 버튼을 사용할 수 없도록 설정합니다. */
  disabled: bool,
  /** 버튼 배경색을 설정합니다. */
  bgColor: string,
  /** 버튼 전경색을 설정합니다. */
  fgColor: string,
  /** 사용자 정의 클래스 이름을 추가할 수 있습니다. */
  className: string,
  /** 버튼 이벤트 리스너는 함수만 설정 가능합니다. */
  onClick: func,
}

export default Button

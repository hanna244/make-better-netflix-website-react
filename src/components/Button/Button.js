import React from 'react'
import { ButtonStyle } from './Button.style'
import { oneOf, bool, string, func } from 'prop-types'

const Button = ({
  bgColor,
  fgColor,
  tag,
  label,
  hover,
  focus,
  ...restProps
}) => {
  const customStyle = {
    background: bgColor ?? null,
    color: fgColor ?? null,
  }

  return (
    <ButtonStyle
      style={customStyle}
      hover={hover}
      focus={focus}
      as={tag}
      type={tag === 'a' ? null : 'button'}
      {...restProps}
    >
      {label}
    </ButtonStyle>
  )
}

Button.defaultProps = {
  label: '로그인',
  tag: 'button',
  hover: false,
  focus: false,
}

Button.propTypes = {
  /** 버튼 또는 링크(a)로 변경하여 활용할 수 있습니다. */
  tag: oneOf(['button', 'a']),
  /** 버튼 배경색을 설정합니다. */
  bgColor: string,
  /** 버튼 전경색을 설정합니다. */
  fgColor: string,
  /** 사용자 정의 클래스 이름을 추가할 수 있습니다. */
  className: string,
  /** 버튼 이벤트 리스너는 함수만 설정 가능합니다. */
  onClick: func,
  /** 사용자 정의 버튼 레이블을 설정할 수 있습니다. tag 설정이 <a>라면 label은 null이 됩니다. */
  label: string.isRequired,
  /** 버튼의 hover 상태를 설정할 수 있습니다. */
  hover: bool,
  /** 버튼의 focus 상태를 설정할 수 있습니다. */
  focus: bool,
}

export default Button

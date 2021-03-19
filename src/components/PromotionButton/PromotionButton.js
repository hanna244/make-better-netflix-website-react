import React from 'react'
import { PromotionButtonStyle, Arrow } from './PromotionButton.style'
import { oneOf, string, func } from 'prop-types'

const PromotionButton = ({
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
    <PromotionButtonStyle
      style={customStyle}
      size={size}
      as={tag}
      type="button"
      {...restProps}
    >
      {label}
      <Arrow src="./assets/Arrow.svg" alt="" />
    </PromotionButtonStyle>
  )
}

PromotionButton.propTypes = {
  /** 버튼 또는 링크(a)로 변경하여 활용할 수 있습니다. */
  tag: oneOf(['button', 'a']),
  /** 버튼 배경색을 설정합니다. */
  bgColor: string,
  /** 버튼 전경색을 설정합니다. */
  fgColor: string,
  /** 버튼 이벤트 리스너는 함수만 설정 가능합니다. */
  onClick: func,
}

export default PromotionButton

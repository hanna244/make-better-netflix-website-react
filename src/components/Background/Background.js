import React from 'react'
import { string, bool } from 'prop-types'
import { BackgroundStyle } from './Background.style'

const Background = ({ dim = false, as = 'div', className, ...reatProps }) => {
  return (
    <BackgroundStyle
      dim={dim}
      as={as}
      className={className}
      {...reatProps}
    ></BackgroundStyle>
  )
}

Background.propTypes = {
  /** 현재 기본으로 <div> 요소가 설정되어 있습니다. 의미에 맞게 사용자가 tag를 설정할 수 있습니다. */
  as: string,
  /** 배경을 딤(dim) 처리 설정할 수 있습니다. */
  dim: bool,
  /** 사용자 정의 클래스 이름을 추가할 수 있습니다. */
  className: string,
}

export default Background

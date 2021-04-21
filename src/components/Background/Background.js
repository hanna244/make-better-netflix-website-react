import React from 'react'
import { string, bool } from 'prop-types'
import { BackgroundStyle } from './Background.style'

const Background = ({ dim, as, path, className, ...reatProps }) => {
  return (
    <BackgroundStyle
      dim={dim}
      as={as}
      className={className}
      path={path}
      {...reatProps}
    />
  )
}

Background.defaultProps = {
  dim: false,
  as: 'div',
  path: 'Cover.jpg',
}

Background.propTypes = {
  /** 현재 기본으로 `<div>` 요소가 설정되어 있습니다. 의미에 맞게 사용자가 tag를 설정할 수 있습니다. */
  as: string,
  /** 배경을 딤(dim) 처리 설정을 할 수 있습니다. */
  dim: bool,
  /** 사용자 정의 배경 이미지 파일을 설정 할 수 있습니다. 기본 경로는 **"public/assets/"**입니다. */
  path: string,
  /** 사용자 정의 클래스 이름을 추가할 수 있습니다. */
  className: string,
}

export default Background

import React from 'react'
import { oneOf, string } from 'prop-types'

const SelectIcon = ({ type, alt = '', ...restProps }) => {
  const { arrow, global } = SelectIcon.Image

  let src = ''
  switch (type) {
    case 'arrow':
      src = arrow
      break
    case 'global':
      src = global
      break
    default:
      throw new Error('지원하는 아이콘 타입이 존재하지 않습니다.')
  }

  return <img src={src} alt={alt} {...restProps}></img>
}

SelectIcon.Image = {
  arrow: './assets/select_arrow.svg',
  global: './assets/select_global.svg',
}

SelectIcon.propTypes = {
  /** 이미지의 타입을 선택할 수 있습니다. */
  type: oneOf(['arrow', 'global']),
  /** 아이콘 대체 텍스트는 스크린 리더 사용자에게 읽힐 콘텐츠입니다. 아이콘과 동등한 정보를 제공해야 합니다. */
  alt: string,
}

export default SelectIcon

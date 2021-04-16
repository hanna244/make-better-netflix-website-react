import React from 'react'
import { string } from 'prop-types'
import { getPublicAssets } from 'utils'

const Favicon = ({ alt, ...restProps }) => {
  return (
    <img src={`${getPublicAssets('Favicon.png')}`} alt={alt} {...restProps} />
  )
}

Favicon.propTypes = {
  /** 아이콘 대체 텍스트는 스크린 리더 사용자에게 읽힐 콘텐츠입니다. 아이콘과 동등한 정보를 제공해야 합니다. */
  alt: string.isRequired,
}

export default Favicon

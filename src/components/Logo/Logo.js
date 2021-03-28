import React from 'react'
import { string } from 'prop-types'
import { LogoImage } from './Logo.style'

const Logo = ({ alt, ...restProps }) => {
  return <LogoImage src="./assets/Logo.svg" alt={alt} {...restProps} />
}

Logo.propTypes = {
  /** 아이콘 대체 텍스트는 스크린 리더 사용자에게 읽힐 콘텐츠입니다. 아이콘과 동등한 정보를 제공해야 합니다. */
  alt: string.isRequired,
}

export default Logo

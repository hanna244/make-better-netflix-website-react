import { string } from 'prop-types'
import React from 'react'

import {
  HeaderContainer,
  HeaderHomeLink,
  HeaderLoginLink,
  HeaderLogo,
} from './Header.style'

const Header = ({ className, ...restProps }) => {
  // 작업 중 링크 기본 이벤트 제어 설정
  const controlLink = (e) => {
    e.preventDefault()
  }

  return (
    <HeaderContainer onClick={controlLink} className={className} {...restProps}>
      <HeaderHomeLink href="/">
        <HeaderLogo alt="넷플릭스 홈 링크" />
      </HeaderHomeLink>
      <HeaderLoginLink href="login" tag="a" />
    </HeaderContainer>
  )
}

Header.propTypes = {
  /** 사용자 정의 클래스 명을 설정할 수 있습니다. */
  className: string,
}

export default Header

import React from 'react'

import {
  OuterContainer,
  InnerContainer,
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
    <OuterContainer>
      <InnerContainer
        onClick={controlLink}
        className={className}
        {...restProps}
      >
        <HeaderHomeLink href="/">
          <HeaderLogo />
        </HeaderHomeLink>
        <HeaderLoginLink href="login" tag="a" />
      </InnerContainer>
    </OuterContainer>
  )
}

export default Header

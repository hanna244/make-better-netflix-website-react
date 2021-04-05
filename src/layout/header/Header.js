import { string } from 'prop-types'
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
        <h1>
          <HeaderHomeLink href="/">
            <HeaderLogo alt="넷플릭스 홈" />
          </HeaderHomeLink>
        </h1>
        <HeaderLoginLink href="login" tag="a" />
      </InnerContainer>
    </OuterContainer>
  )
}

Header.propTypes = {
  /** 사용자 정의 클래스 명을 설정할 수 있습니다. */
  className: string,
}

export default Header

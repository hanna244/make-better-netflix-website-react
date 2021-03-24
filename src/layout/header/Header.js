import React, { Fragment } from 'react'
import { Logo } from '../../components'
import { HeaderHomeLink, HeaderLoginLink } from './Header.style'

const Header = () => {
  // 작업 중 링크 기본 이벤트 제어 설정
  const controlLink = (e) => {
    e.preventDefault()
  }

  return (
    <Fragment>
      <HeaderHomeLink onClick={controlLink} href="/">
        <Logo />
      </HeaderHomeLink>
      <HeaderLoginLink onClick={controlLink} href="login" tag="a" />
    </Fragment>
  )
}

export default Header

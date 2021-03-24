import React from 'react'
import { Logo } from '../../components'
import {
  HeaderHomeLink,
  HeaderContainer,
  HeaderLoginLink,
} from './Header.style'

const Header = () => {
  // 작업 중 링크 기본 이벤트 제어 설정
  const controlLink = (e) => {
    e.preventDefault()
  }

  return (
    <HeaderContainer
      paddingVertical="4rem"
      marginHorizon="12rem"
      onClick={controlLink}
    >
      <HeaderHomeLink href="/">
        <Logo />
      </HeaderHomeLink>
      <HeaderLoginLink href="login" tag="a" />
    </HeaderContainer>
  )
}

export default Header

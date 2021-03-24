import React, { Fragment } from 'react'
import { Button, Logo } from '../../components'

const Header = () => {
  // 작업 중 링크 기본 이벤트 제어 설정
  const controlLink = (e) => {
    e.preventDefault()
  }

  return (
    <Fragment>
      <headerLinkStyle onClick={controlLink} href="/">
        <Logo />
      </headerLinkStyle>
      <Button onClick={controlLink} href="login" tag="a" />
    </Fragment>
  )
}

export default Header

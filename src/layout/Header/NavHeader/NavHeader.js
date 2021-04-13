import React, { useCallback } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import {
  OuterContainer,
  InnerContainer,
  NavHeaderHomeLink,
  NavHeaderLogo,
} from './NavHeader.style'

const NavHeader = ({ className, hasLogInButton, ...restProps }) => {
  const history = useHistory()

  const handleMoveHome = useCallback(
    (e) => {
      e.preventDefault()
      history.push('/browse')
    },
    [history]
  )
  return (
    <OuterContainer>
      <InnerContainer className={className} {...restProps}>
        <h1>
          <NavHeaderHomeLink onClick={handleMoveHome}>
            <NavHeaderLogo alt="브라우즈 홈" />
          </NavHeaderHomeLink>
        </h1>
        <nav>
          <NavLink to={`/browse`}>홈</NavLink>
          <NavLink to={`/browse/genre/tv`}>TV 프로그램</NavLink>
          <NavLink to={`/browse/genre/movie`}>영화</NavLink>
          <NavLink to={`/browse/mylist`}>내가 찜한 콘텐츠</NavLink>
        </nav>
      </InnerContainer>
    </OuterContainer>
  )
}

export default NavHeader

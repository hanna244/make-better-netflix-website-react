import React, { useCallback } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import {
  OuterContainer,
  InnerContainer,
  NavHeaderHomeLink,
  NavHeaderLogo,
  AriaStyle,
  NavHeaderNavStyle,
  NavHeaderNavLinkStyle,
  NavHeaderIconListStyle,
  NavHeaderSearchIconStyle,
  NavHeaderBellIconStyle,
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
        <NavHeaderNavStyle>
          <NavHeaderNavLinkStyle
            linkTag={NavLink}
            linkArray={[
              { to: `/browse`, label: '홈' },
              { to: `/browse/genre/tv`, label: 'TV 프로그램' },
              { to: `/browse/genre/movie`, label: '영화' },
              { to: `/browse/mylist`, label: '내가 찜한 콘텐츠' },
            ]}
          />
          {/* <NavHeaderNavLinkStyle to={`/browse`}>홈</NavHeaderNavLinkStyle>
          <NavHeaderNavLinkStyle to={`/browse/genre/tv`}>
            TV 프로그램
          </NavHeaderNavLinkStyle>
          <NavHeaderNavLinkStyle to={`/browse/genre/movie`}>
            영화
          </NavHeaderNavLinkStyle>
          <NavHeaderNavLinkStyle to={`/browse/mylist`}>
            내가 찜한 콘텐츠
          </NavHeaderNavLinkStyle> */}
        </NavHeaderNavStyle>
        <NavHeaderIconListStyle>
          <li>
            <NavHeaderSearchIconStyle type="button">
              <AriaStyle>영화 검색</AriaStyle>
            </NavHeaderSearchIconStyle>
          </li>
          <li>
            <NavHeaderBellIconStyle type="button">
              <AriaStyle>새로운 알림</AriaStyle>
            </NavHeaderBellIconStyle>
          </li>
        </NavHeaderIconListStyle>
      </InnerContainer>
    </OuterContainer>
  )
}

export default NavHeader

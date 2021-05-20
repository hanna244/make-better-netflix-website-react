import React, { useCallback } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Navigation } from 'components'
import {
  OuterContainer,
  InnerContainer,
  NavHeaderHomeLink,
  NavHeaderLogo,
  AriaStyle,
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
        <Navigation
          linkTag="NavLink"
          linkArray={[
            { to: `/browse`, label: '홈' },
            { to: `/browse/genre/tv`, label: 'TV 프로그램' },
            { to: `/browse/genre/movie`, label: '영화' },
            { to: `/browse/mylist`, label: '내가 찜한 콘텐츠' },
          ]}
        />
        {/* <nav>
          <NavLink to={`/browse`}>홈</NavLink>
          <NavLink to={`/browse/genre/tv`}>TV 프로그램</NavLink>
          <NavLink to={`/browse/genre/movie`}>영화</NavLink>
          <NavLink to={`/browse/mylist`}>내가 찜한 콘텐츠</NavLink>
        </nav> */}
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

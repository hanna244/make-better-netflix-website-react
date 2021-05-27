import { Profile } from 'components'
import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getPublicAssets } from 'utils'
import {
  OuterContainer,
  InnerContainer,
  NavHeaderHomeLink,
  NavHeaderLogo,
  AriaStyle,
  NavHeaderNavContainerStyle,
  NavHeaderNavStyle,
  NavHeaderNavControlButtonStyle,
  NavHeaderDropdownListStyle,
  NavHeaderNavListItemStyle,
  NavHeaderNavLinkStyle,
  NavHeaderSearchIconStyle,
} from './NavHeader.style'

const NavHeader = ({ className, hasLogInButton, ...restProps }) => {
  const [showMenu, setShowMenu] = useState(false)
  const history = useHistory()

  const handleMoveHome = useCallback(
    (e) => {
      e.preventDefault()
      history.push('/browse')
    },
    [history]
  )

  // dropdown 메뉴가 열리고 마우스 포커스가 이동하기 전 메뉴가 닫히는 현상 방지를 위해 setTimeout 설정
  const handleCloseMenu = useCallback(() => {
    window.setTimeout(() => setShowMenu(false), 2000)
  }, [])

  return (
    <OuterContainer>
      <InnerContainer className={className} {...restProps}>
        <h1>
          <NavHeaderHomeLink onClick={handleMoveHome}>
            <NavHeaderLogo alt="브라우즈 홈" />
          </NavHeaderHomeLink>
        </h1>
        <NavHeaderNavContainerStyle>
          <div className="mobileScreen">
            <NavHeaderNavStyle
              onMouseEnter={() => setShowMenu(true)}
              onMouseLeave={() => handleCloseMenu()}
              onClick={() => setShowMenu(!showMenu)}
              onBlur={() => setShowMenu(false)}
            >
              <NavHeaderNavControlButtonStyle
                aria-expanded={showMenu}
                type="button"
              >
                메뉴
              </NavHeaderNavControlButtonStyle>
              {showMenu ? (
                <NavHeaderDropdownListStyle
                  style={{ opacity: 1, transitionDuration: '150ms' }}
                  rolr="menu"
                >
                  <NavHeaderNavListItemStyle role="none">
                    <NavHeaderNavLinkStyle rolr="menuitem" to={`/browse`}>
                      홈
                    </NavHeaderNavLinkStyle>
                  </NavHeaderNavListItemStyle>
                  <NavHeaderNavListItemStyle role="none">
                    <NavHeaderNavLinkStyle
                      rolr="menuitem"
                      to={`/browse/genre/tv`}
                    >
                      TV 프로그램
                    </NavHeaderNavLinkStyle>
                  </NavHeaderNavListItemStyle>
                  <NavHeaderNavListItemStyle role="none">
                    <NavHeaderNavLinkStyle
                      rolr="menuitem"
                      to={`/browse/genre/movie`}
                    >
                      영화
                    </NavHeaderNavLinkStyle>
                  </NavHeaderNavListItemStyle>
                  <NavHeaderNavListItemStyle role="none">
                    <NavHeaderNavLinkStyle
                      rolr="menuitem"
                      to={`/browse/mylist`}
                    >
                      내가 찜한 콘텐츠
                    </NavHeaderNavLinkStyle>
                  </NavHeaderNavListItemStyle>
                </NavHeaderDropdownListStyle>
              ) : null}
            </NavHeaderNavStyle>
          </div>
          <div className="deskTopScreen">
            <NavHeaderNavStyle>
              <NavHeaderDropdownListStyle as="ul" rolr="menu">
                <li role="none">
                  <NavHeaderNavLinkStyle rolr="menuitem" to={`/browse`}>
                    홈
                  </NavHeaderNavLinkStyle>
                </li>
                <NavHeaderNavListItemStyle role="none">
                  <NavHeaderNavLinkStyle
                    rolr="menuitem"
                    to={`/browse/genre/tv`}
                  >
                    TV 프로그램
                  </NavHeaderNavLinkStyle>
                </NavHeaderNavListItemStyle>
                <NavHeaderNavListItemStyle role="none">
                  <NavHeaderNavLinkStyle
                    rolr="menuitem"
                    to={`/browse/genre/movie`}
                  >
                    영화
                  </NavHeaderNavLinkStyle>
                </NavHeaderNavListItemStyle>
                <NavHeaderNavListItemStyle role="none">
                  <NavHeaderNavLinkStyle rolr="menuitem" to={`/browse/mylist`}>
                    내가 찜한 콘텐츠
                  </NavHeaderNavLinkStyle>
                </NavHeaderNavListItemStyle>
              </NavHeaderDropdownListStyle>
            </NavHeaderNavStyle>
          </div>
        </NavHeaderNavContainerStyle>
        <NavHeaderSearchIconStyle type="button">
          <AriaStyle>영화 검색</AriaStyle>
        </NavHeaderSearchIconStyle>
        <Profile />
      </InnerContainer>
    </OuterContainer>
  )
}

export default NavHeader

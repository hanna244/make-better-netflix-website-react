import React, { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { getPublicAssets } from 'utils'
import {
  OuterContainer,
  InnerContainer,
  NavHeaderHomeLink,
  NavHeaderLogo,
  AriaStyle,
  NavHeaderNavContainerStyle,
  NavHeaderNavOpenButtonStyle,
  NavHeaderNavListStyle,
  NavHeaderNavListItemStyle,
  NavHeaderNavLinkStyle,
  NavHeaderSearchIconStyle,
  NavHeaderProfileStyle,
  NavHeaderProfileImgStyle,
} from './NavHeader.style'

const NavHeader = ({ className, hasLogInButton, ...restProps }) => {
  const [showMenu, setShowMenu] = useState(false)
  console.log(`showMenu: ${showMenu}`)
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
        <NavHeaderNavContainerStyle>
          <div className="mobileScreen">
            <nav>
              <NavHeaderNavOpenButtonStyle
                aria-expanded={showMenu}
                type="button"
                onClick={() => setShowMenu(!showMenu)}
              >
                메뉴
              </NavHeaderNavOpenButtonStyle>
              {showMenu ? (
                <NavHeaderNavListStyle rolr="menu" className="">
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
                </NavHeaderNavListStyle>
              ) : null}
            </nav>
          </div>
          <div className="deskTopScreen">
            <nav>
              <NavHeaderNavListStyle rolr="menu">
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
                  <NavHeaderNavLinkStyle rolr="menuitem" to={`/browse/mylist`}>
                    내가 찜한 콘텐츠
                  </NavHeaderNavLinkStyle>
                </NavHeaderNavListItemStyle>
              </NavHeaderNavListStyle>
            </nav>
          </div>
        </NavHeaderNavContainerStyle>
        <NavHeaderSearchIconStyle type="button">
          <AriaStyle>영화 검색</AriaStyle>
        </NavHeaderSearchIconStyle>
        <NavHeaderProfileStyle type="button">
          <NavHeaderProfileImgStyle
            src={`${getPublicAssets('profile.png')}`}
            alt="사용자 프로필"
          />
        </NavHeaderProfileStyle>
      </InnerContainer>
    </OuterContainer>
  )
}

export default NavHeader

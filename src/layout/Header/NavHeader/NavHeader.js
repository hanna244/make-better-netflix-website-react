import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { getPublicAssets } from 'utils'
import {
  OuterContainer,
  InnerContainer,
  NavHeaderHomeLink,
  NavHeaderLogo,
  AriaStyle,
  NavHeaderNavStyle,
  NavHeaderNavLinkStyle,
  NavHeaderSearchIconStyle,
  NavHeaderProfileStyle,
  NavHeaderProfileImgStyle,
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
          <NavHeaderNavLinkStyle to={`/browse`}>홈</NavHeaderNavLinkStyle>
          <NavHeaderNavLinkStyle to={`/browse/genre/tv`}>
            TV 프로그램
          </NavHeaderNavLinkStyle>
          <NavHeaderNavLinkStyle to={`/browse/genre/movie`}>
            영화
          </NavHeaderNavLinkStyle>
          <NavHeaderNavLinkStyle to={`/browse/mylist`}>
            내가 찜한 콘텐츠
          </NavHeaderNavLinkStyle>
        </NavHeaderNavStyle>
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

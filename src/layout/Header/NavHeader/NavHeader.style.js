import { Navigation } from 'components'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { a11yHidden, resetButton, resetLink, resetList } from 'styles/common'
import { getPublicAssets, getColor } from 'utils'
import {
  OuterContainerStyle as DefaultOuterContainer,
  InnerContainerStyle as DefaultInnerContainer,
  HeaderHomeLinkStyle as DefaultHeaderHomeLink,
  HeaderLogoStyle as DefaultHeaderLogo,
} from '../DefaultHeader/DefaultHeader.style'

/* 네브 해더 공용 버튼 스타일 */
const NavHeaderCommonButton = styled.button`
  ${resetButton}
  background: inherit;
  padding: 0;

  &::before {
    content: '';
    display: inline-block;
  }

  &::after {
    content: '';
    display: inline-block;
  }
`
NavHeaderCommonButton.displayName = 'NavHeaderCommonButton'

/* ----------------------------------------------------------------------- */
export const OuterContainer = styled(DefaultOuterContainer)``
OuterContainer.displayName = 'OuterContainer'

export const InnerContainer = styled(DefaultInnerContainer)`
  padding: 0;
  margin: 0 6rem;
  max-width: 145rem;
`
InnerContainer.displayName = 'InnerContainer'

export const NavHeaderHomeLink = styled(DefaultHeaderHomeLink)``
NavHeaderHomeLink.displayName = 'NavHeaderHomeLink'

export const NavHeaderLogo = styled(DefaultHeaderLogo)``
NavHeaderLogo.displayName = 'NavHeaderLogo'

export const NavHeaderNavStyle = styled.nav`
  flex: 1;
  margin-left: 2.3rem;
  color: ${getColor('lightGray')};
`
NavHeaderNavStyle.displayName = 'NavHeaderNavStyle'

export const NavHeaderNavLinkStyle = styled(NavLink)`
  ${resetLink}
  margin-right: 1.8rem;

  :hover {
    color: ${getColor('white')};
  }
`
NavHeaderNavLinkStyle.displayName = 'NavHeaderNavLinkStyle'

export const AriaStyle = styled.span`
  ${a11yHidden}
`
AriaStyle.displayName = 'AriaStyle'

export const NavHeaderSearchIconStyle = styled(NavHeaderCommonButton)`
  margin-right: 2.1rem;

  &::before {
    background: url(${getPublicAssets('search.svg')}) no-repeat;
    width: 1.8rem;
    height: 2rem;
    margin-top: 0.9rem;
  }
`
NavHeaderSearchIconStyle.displayName = 'NavHeaderSearchIconStyle'

export const NavHeaderProfileStyle = styled(NavHeaderCommonButton)`
  &::after {
    background: url(${getPublicAssets('profile-arrow.svg')}) no-repeat -0.2px -2px/96%;
    width: 1rem;
    height: 0.5rem;
    margin-left: 1rem;
  }
`
NavHeaderProfileStyle.displayName = 'NavHeaderProfileStyle'

export const NavHeaderProfileImgStyle = styled.img`
  width: 3.2rem;
`
NavHeaderProfileImgStyle.displayName = 'NavHeaderProfileImgStyle'

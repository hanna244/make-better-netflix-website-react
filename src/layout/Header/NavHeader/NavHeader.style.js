import { Navigation } from 'components'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { a11yHidden, resetButton, resetLink, resetList } from 'styles/common'
import {
  DropdownCommonListStyle,
  CommonNavButtonStyle,
} from 'styles/customCommon'
import { getPublicAssets, getColor } from 'utils'
import {
  OuterContainerStyle as DefaultOuterContainer,
  InnerContainerStyle as DefaultInnerContainer,
  HeaderHomeLinkStyle as DefaultHeaderHomeLink,
  HeaderLogoStyle as DefaultHeaderLogo,
} from '../DefaultHeader/DefaultHeader.style'
import { themes } from 'styles/theme'

const {
  breakpoints: { lg },
} = themes

export const OuterContainer = styled(DefaultOuterContainer)``
OuterContainer.displayName = 'OuterContainer'

export const InnerContainer = styled(DefaultInnerContainer)`
  @media (min-width: ${lg}em) {
    padding: 0;
    margin: 0 6rem;
    max-width: 145rem;
  }
`
InnerContainer.displayName = 'InnerContainer'

export const NavHeaderHomeLink = styled(DefaultHeaderHomeLink)``
NavHeaderHomeLink.displayName = 'NavHeaderHomeLink'

export const NavHeaderLogo = styled(DefaultHeaderLogo)``
NavHeaderLogo.displayName = 'NavHeaderLogo'

export const NavHeaderNavContainerStyle = styled.div`
  position: relative;
  flex: 1;
  margin-left: 2.3rem;
  color: ${getColor('lightGray')};

  .mobileScreen {
    display: block;

    @media (min-width: ${lg}em) {
      display: none;
    }
  }

  .deskTopScreen {
    display: none;

    @media (min-width: ${lg}em) {
      display: block;
    }
  }
`
NavHeaderNavContainerStyle.displayName = 'NavHeaderNavContainerStyle'

export const NavHeaderNavStyle = styled.nav`
  /* 메뉴 텍스트에 hover 시 dropdown이 보여질 수 있도록 width 설정 */
  width: 5rem;

  @media (min-width: ${lg}em) {
    width: auto;
  }
`
NavHeaderNavStyle.displayName = 'NavHeaderNavStyle'

export const NavHeaderNavControlButtonStyle = styled(CommonNavButtonStyle)`
  color: ${getColor('white')};

  &::after {
    background: url(${getPublicAssets('profile-arrow.svg')}) no-repeat -0.2px -2px/96%;
    width: 1rem;
    height: 1rem;
    margin-left: 1rem;
  }
`
NavHeaderNavControlButtonStyle.displayName = 'NavHeaderNavControlButtonStyle'

export const NavHeaderDropdownListStyle = styled(DropdownCommonListStyle)`
  ${resetList}
  left: -100px;
  top: 45px;
  width: 26rem;
  text-align: center;
  border-top: 2px solid ${getColor('white')};

  &::before {
    top: -11px;
    transform: translateX(-50%);
  }

  @media (min-width: ${lg}em) {
    position: static;
    display: flex;
    flex-flow: row nowrap;
    border: 0;
    margin-top: 0;
    width: auto;
  }
`

NavHeaderDropdownListStyle.displayName = 'NavHeaderDropdownListStyle'

export const NavHeaderNavListItemStyle = styled.li``
NavHeaderNavListItemStyle.displayName = 'NavHeaderNavListItemStyle'

export const NavHeaderNavLinkStyle = styled(NavLink)`
  ${resetLink}
  display: block;
  padding: 1em 2em;

  :hover {
    color: ${getColor('white')};
  }

  @media (min-width: ${lg}em) {
    margin-right: 1.8rem;
    padding: 0;
  }
`
NavHeaderNavLinkStyle.displayName = 'NavHeaderNavLinkStyle'

export const AriaStyle = styled.span`
  ${a11yHidden}
`
AriaStyle.displayName = 'AriaStyle'

export const NavHeaderSearchIconStyle = styled(CommonNavButtonStyle)`
  margin-right: 2.1rem;

  &::before {
    background: url(${getPublicAssets('search.svg')}) no-repeat;
    width: 1.8rem;
    height: 2rem;
    margin-top: 0.9rem;
  }
`
NavHeaderSearchIconStyle.displayName = 'NavHeaderSearchIconStyle'

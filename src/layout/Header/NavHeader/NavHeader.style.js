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
import { themes } from 'styles/theme'

const {
  breakpoints: { lg },
} = themes

/* common style ---------------------------------------------------------- */

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

  &:hover {
    ul {
      display: block;
    }
  }

  @media (min-width: ${lg}em) {
    width: auto;

    &:hover {
      pointer-events: none;
    }
  }
`
NavHeaderNavStyle.displayName = 'NavHeaderNavStyle'

export const NavHeaderNavOpenButtonStyle = styled(NavHeaderCommonButton)`
  color: ${getColor('white')};
  padding: 3rem 0;

  &::after {
    background: url(${getPublicAssets('profile-arrow.svg')}) no-repeat -0.2px -2px/96%;
    width: 1rem;
    height: 1rem;
    margin-left: 1rem;
  }
`
NavHeaderNavOpenButtonStyle.displayName = 'NavHeaderNavOpenButtonStyle'
export const NavHeaderNavListStyle = styled.ul`
  ${resetList}
  display: block;
  opacity: 1;
  position: absolute;
  left: -100px;
  width: 26rem;
  text-align: center;
  border-top: 2px solid ${getColor('white')};

  &::before {
    content: '';
    position: absolute;
    top: -11px;
    transform: translateX(-50%);
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid ${getColor('white')};
  }

  @media (min-width: ${lg}em) {
    position: static;
    /* display: block; */
    display: flex;
    flex-flow: row nowrap;
    border: 0;
    margin-top: 0;
    width: auto;

    &::before {
      content: none;
    }
  }
`

NavHeaderNavListStyle.displayName = 'NavHeaderNavListStyle'

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

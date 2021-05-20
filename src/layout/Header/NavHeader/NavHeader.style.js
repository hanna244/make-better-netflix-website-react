import styled from 'styled-components'
import { a11yHidden, resetButton, resetList } from 'styles/common'
import { getPublicAssets } from 'utils'
import {
  OuterContainerStyle as DefaultOuterContainer,
  InnerContainerStyle as DefaultInnerContainer,
  HeaderHomeLinkStyle as DefaultHeaderHomeLink,
  HeaderLogoStyle as DefaultHeaderLogo,
} from '../DefaultHeader/DefaultHeader.style'

// 네브 헤더 아이콘 공용 스타일 ----------------------------------------- //
export const IconCommonStyle = styled.button`
  ${resetButton}
  background: inherit;

  &::before {
    content: '';
    display: inline-block;
    width: 2.1rem;
    height: 2.1rem;
  }
`

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

export const AriaStyle = styled.span`
  ${a11yHidden}
`
AriaStyle.displayName = 'AriaStyle'

export const NavHeaderIconListStyle = styled.ul`
  ${resetList}
  display: flex;
  flex-flow: row nowrap;
`
NavHeaderIconListStyle.displayName = 'NavHeaderIconListStyle'

export const NavHeaderSearchIconStyle = styled(IconCommonStyle)`
  &::before {
    background: url(${getPublicAssets('search.svg')}) no-repeat;
  }
`
NavHeaderSearchIconStyle.displayName = 'NavHeaderSearchIconStyle'

export const NavHeaderBellIconStyle = styled(IconCommonStyle)`
  &::before {
    background: url(${getPublicAssets('bell.svg')}) no-repeat center/100%;
    width: 2.2rem;
  }
`
NavHeaderBellIconStyle.displayName = 'NavHeaderBellIconStyle'

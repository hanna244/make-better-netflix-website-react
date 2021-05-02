import styled from 'styled-components'
import {
  OuterContainerStyle as DefaultOuterContainer,
  InnerContainerStyle as DefaultInnerContainer,
  HeaderHomeLinkStyle as DefaultHeaderHomeLink,
  HeaderLogoStyle as DefaultHeaderLogo,
} from '../DefaultHeader/DefaultHeader.style'

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

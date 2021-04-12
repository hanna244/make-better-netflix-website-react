import styled from 'styled-components'
import {
  OuterContainer as DefaultOuterContainer,
  InnerContainer as DefaultInnerContainer,
  HeaderHomeLink as DefaultHeaderHomeLink,
  HeaderLogo as DefaultHeaderLogo,
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

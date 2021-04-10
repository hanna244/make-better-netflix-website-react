import styled from 'styled-components'
import { Button, Container, Logo } from '../../components'
import { resetLink } from '../../styles/common'

export const OuterContainer = styled.header`
  margin: 0 auto;
  max-width: 144rem;
`
OuterContainer.displayName = 'OuterContainer'

export const InnerContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.3rem 0;
  margin: 0 1.8rem;

  @media (min-width: 60em) {
    padding: 5.1rem 0;
    margin: 0 12rem;
  }
`
InnerContainer.displayName = 'InnerContainer'

export const HeaderHomeLink = styled.a`
  ${resetLink}
  display: block;
  width: 7.4rem;
  height: 2rem;
  cursor: pointer;

  @media (min-width: 60em) {
    width: 14rem;
    height: 3.8rem;
  }
`
HeaderHomeLink.displayName = 'HeaderHomeLink'

export const HeaderLogo = styled(Logo)`
  width: 14rem;
`
HeaderLogo.displayName = 'HeaderLogo'

export const HeaderLogInLink = styled(Button)`
  ${resetLink}
  font-weight: bold;
  font-size: 1.1rem;
  line-height: 1.1;
  padding: 0.545em 0.954em;

  @media (min-width: 60em) {
    padding: 1.09em 1.818em;
    font-size: 1.6rem;
    line-height: 1;
  }
`
HeaderLogInLink.displayName = 'HeaderLogInLink'

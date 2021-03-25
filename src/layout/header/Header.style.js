import styled from 'styled-components'
import { Button, Container, Logo } from '../../components'
import { resetLink } from '../../styles/common'
import { device } from '../../config/responsiveConfig'

export const OuterContainer = styled(Container)`
  padding: 4rem 0;
  margin: 0 12rem;

  @media ${device.md} {
    padding: 2.3rem 0;
    margin: 0 1.8rem;
    max-width: 120rem;π
  }
`
export const InnerContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  max-width: 120rem;

  /* @media (min-width: 60em) { */
  @media ${device.md} {
    padding: 0;
    margin: 0 1.8rem;
    max-width: 120rem;
  }
`

export const HeaderHomeLink = styled.a`
  ${resetLink}
  display: block;
  width: 7.4rem;
  height: auto;

  /* @media (min-width: 60em) { */
  @media ${device.md} {
    width: 14rem;
  }
`
export const HeaderLogo = styled(Logo)`
  width: 14rem;
`

export const HeaderLoginLink = styled(Button)`
  ${resetLink}
`

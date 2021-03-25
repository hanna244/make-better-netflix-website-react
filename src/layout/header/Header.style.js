import styled from 'styled-components'
import { Button, Container, Logo } from '../../components'
import { resetLink } from '../../styles/common'

export const OuterContainer = styled(Container)`
  padding: 4rem 0;
  margin: 0 12rem;
`
export const InnerContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  max-width: 120rem;
`

export const HeaderHomeLink = styled.a`
  ${resetLink}
  display: block;
  width: 7.4rem;
  height: auto;
`
export const HeaderLogo = styled(Logo)`
  width: 14rem;
`

export const HeaderLoginLink = styled(Button)`
  ${resetLink}
`

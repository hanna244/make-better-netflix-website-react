import styled from 'styled-components'
import { Button, Container, Logo } from '../../components'
import { resetLink } from '../../styles/common'

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.3rem 0;
  margin: 0 1.8rem;
  max-width: 144rem;

  @media (min-width: 60em) {
    padding: 5.1rem 0;
    margin: 0 auto;
  }
`

export const HeaderHomeLink = styled.a`
  ${resetLink}
  display: block;
  width: 7.4rem;
  height: 2rem;

  @media (min-width: 60em) {
    width: 14rem;
    height: 3.8rem;
  }
`
export const HeaderLogo = styled(Logo)`
  width: 14rem;
`

export const HeaderLoginLink = styled(Button)`
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

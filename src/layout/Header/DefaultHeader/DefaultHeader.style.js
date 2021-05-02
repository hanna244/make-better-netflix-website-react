import styled from 'styled-components'
import { Button, Container, Logo } from 'components'
import { resetHeading, resetLink } from 'styles/common'
import { themes } from 'styles/theme'

const {
  breakpoints: { lg },
} = themes

export const OuterContainerStyle = styled.header`
  position: fixed;
  margin: 0 auto;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.6) 55%,
    rgba(0, 0, 0, 0) 90%
  );
`
OuterContainerStyle.displayName = 'OuterContainerStyle'

export const InnerContainerStyle = styled(Container)`
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
InnerContainerStyle.displayName = 'InnerContainerStyle'

export const HeaderHeadingStyle = styled.h1`
  ${resetHeading}
`
HeaderHeadingStyle.displayName = 'HeaderHeadingStyle'

export const HeaderHomeLinkStyle = styled.a`
  ${resetLink}
  display: block;
  width: 7.4rem;
  cursor: pointer;

  @media (min-width: 60em) {
    width: 14rem;
    height: 3.8rem;
  }
`
HeaderHomeLinkStyle.displayName = 'HeaderHomeLinkStyle'

export const HeaderLogoStyle = styled(Logo)`
  width: 14rem;
`
HeaderLogoStyle.displayName = 'HeaderLogoStyle'

export const HeaderLogInLinkStyle = styled(Button)`
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
HeaderLogInLinkStyle.displayName = 'HeaderLogInLinkStyle'

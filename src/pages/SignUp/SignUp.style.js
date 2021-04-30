import styled from 'styled-components'
import { Container } from 'components'
import { LogInCommonBackgroundStyle } from 'styles/customCommon'
import { themes } from 'styles/theme'

const {
  breakpoints: { lg },
} = themes

export const SignUpBackgroundStyle = styled(LogInCommonBackgroundStyle)`
  background-size: cover;
`
SignUpBackgroundStyle.displayName = 'SignUpBackgroundStyle'

export const SignUpContainerStyle = styled(Container)`
  padding: 2rem 0;
  margin: 0 1.8rem;

  @media (min-width: ${lg}em) {
    min-width: 44rem;
  }
`
SignUpContainerStyle.displayName = 'SignUpContainerStyle'

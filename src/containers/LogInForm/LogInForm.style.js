import styled from 'styled-components'
import { Container } from 'components'
import { getColor, setFont } from 'utils'
import { themes } from 'styles/theme'
import { resetButton } from 'styles/common'
import {
  FormInputCommonStyle,
  LoginFormTextCommonStyle,
} from '../../styles/customCommon'

const {
  breakpoints: { lg },
} = themes

export const LogInEmailInputStyle = styled(FormInputCommonStyle)`
  @media (min-width: ${lg}em) {
    margin-top: 3rem;
  }
`
LogInEmailInputStyle.displayName = 'LogInEmailInputStyle'

export const HelpButtonStyle = styled.button`
  ${resetButton}
  ${setFont(1.3, 1.35)}
  border: 0;
  padding: 0;
  color: ${getColor('lightGray')};
  background: none;
`
HelpButtonStyle.displayName = 'HelpButtonStyle'

export const RememberAndHelpContainerStyle = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 1rem 0 0;
`
RememberAndHelpContainerStyle.displayName = 'RememberAndHelpContainerStyle'

export const GoogleCaptchaStyle = styled(LoginFormTextCommonStyle)`
  margin-top: 1rem;

  a {
    color: ${getColor('blue')};
  }
`
GoogleCaptchaStyle.displayName = 'GoogleCaptchaStyle'

export const CheckEmailStyle = styled(LoginFormTextCommonStyle)`
  margin-top: 2rem;

  a {
    color: ${getColor('white')};
  }
`
CheckEmailStyle.displayName = 'CheckEmailStyle'

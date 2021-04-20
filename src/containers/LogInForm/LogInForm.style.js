import styled from 'styled-components'
import { Button, Container } from 'components'
import { resetButton, resetFigure, resetImg } from 'styles/common'
import { getColor, setFont } from 'utils'
import {
  FormInputCommonStyle,
  LoginFormTextCommonStyle,
} from '../../styles/customCommon'

export const LogInContainerStyle = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 3rem;
  max-width: 44rem;
  background: rgba(1, 1, 1, 0.6);
  /* backdrop-filter: blur(4px); */
  border-radius: 6px;

  @media (max-width: 60em) {
    padding: 2rem 0;
    margin: 0 1.8rem
    max-width: 38rem;
  }
`
LogInContainerStyle.displayName = 'LogInContainerStyle'

export const LoginHeadStyle = styled.h2`
  ${setFont(2, 1.2, 'bold')}
  margin: 0;
`
LoginHeadStyle.displayName = 'LoginHeadStyle'

export const EmailInputStyle = styled(FormInputCommonStyle)`
  @media (max-width: 60em) {
    margin-top: 3rem;
  }
`
EmailInputStyle.displayName = 'EmailInputStyle'

export const PasswordInputStyle = styled(FormInputCommonStyle)`
  @media (max-width: 60em) {
    margin-top: 4.4rem;
  }
`
EmailInputStyle.displayName = 'EmailInputStyle'

export const LogInButtonStyle = styled(Button)`
  ${setFont(1.6, 1, 'bold')}
  padding: 0.937em;
  margin-top: 3rem;

  @media (max-width: 60em) {
    padding: 0.937em;
  }
`
LogInButtonStyle.displayName = 'LogInButtonStyle'

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

export const GoogleFigureStyle = styled.figure`
  ${resetFigure}
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: 2rem;
`
GoogleFigureStyle.displayName = 'GoogleFigureStyle'

export const GoogleImgStyle = styled.img`
  ${resetImg}
`
GoogleImgStyle.displayName = 'GoogleImgStyle'

export const GoogleFigcaptionStyle = styled.figcaption`
${setFont(1.2, 1)}
color: ${getColor('gray')};
display: grid;
align-self: flex-end;
margin-left: 0.4rem;
`
GoogleFigcaptionStyle.displayName = 'GoogleFigcaptionStyle'

export const CheckEmailStyle = styled(LoginFormTextCommonStyle)`
  margin-top: 2rem;

  a {
    color: ${getColor('white')};
  }
`
CheckEmailStyle.displayName = 'CheckEmailStyle'

export const GoogleCaptchaStyle = styled(LoginFormTextCommonStyle)`
  margin-top: 1rem;

  a {
    color: ${getColor('blue')};
  }
`
GoogleCaptchaStyle.displayName = 'GoogleCaptchaStyle'

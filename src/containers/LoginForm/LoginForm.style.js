import styled from 'styled-components'
import { Button, Container, Input } from '../../components'
import {
  resetButton,
  resetFigure,
  resetImg,
  resetLink,
} from '../../styles/common'
import { getColor, setFont } from '../../utils'

export const LogInContainer = styled(Container)`
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
LogInContainer.displayName = 'LogInContainer'

export const Head = styled.h2`
  ${setFont(2, 1.2, 'bold')}
  margin: 0;
`
Head.displayName = 'Head'

export const EmailInput = styled(Input)`
  margin: 2rem auto 0;
  width: 100%;
  @media (max-width: 60em) {
    margin-top: 3rem;
    /* min-width: 33.9rem; */
  }
`
EmailInput.displayName = 'EmailInput'

export const PasswordInput = styled(EmailInput)`
  @media (max-width: 60em) {
    margin-top: 4.4rem;
  }
`
PasswordInput.displayName = 'PasswordInput'

export const LogInButton = styled(Button)`
  ${setFont(1.6, 1, 'bold')}
  padding: 0.937em;
  margin-top: 3rem;

  @media (max-width: 60em) {
    padding: 0.937em;
  }
`
LogInButton.displayName = 'LogInButton'

export const HelpButton = styled.button`
  ${resetButton}
  ${setFont(1.3, 1.35)}
  border: 0;
  padding: 0;
  color: ${getColor('lightGray')};
  background: none;
`
HelpButton.displayName = 'HelpButton'

export const RememberAndHelpContainer = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 1rem 0 0;
`
RememberAndHelpContainer.displayName = 'RememberAndHelpContainer'

export const GoogleFigure = styled.figure`
  ${resetFigure}
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: 2rem;
`
GoogleFigure.displayName = 'GoogleFigure'

export const GoogleImg = styled.img`
  ${resetImg}
`
GoogleImg.displayName = 'GoogleImg'

export const GoogleFigcaption = styled.figcaption`
${setFont(1.2, 1.35)}
color: ${getColor('gray')};
display: grid;
align-self: flex-end;
margin-left: 0.4rem;
`
GoogleFigcaption.displayName = 'GoogleFigcaption'

export const CheckEmail = styled.span`
  ${setFont(1.2, 1.35, 'normal')}
  color: ${getColor('lightGray')};
  margin-top: 2rem;

  a {
    ${resetLink}
    color: ${getColor('white')};
  }
`
CheckEmail.displayName = 'CheckEmail'

export const GoogleCaptcha = styled(CheckEmail)`
  margin-top: 1rem;
  a {
    color: ${getColor('blue')};
  }
`
GoogleCaptcha.displayName = 'GoogleCaptcha'

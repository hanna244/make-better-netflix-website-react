import styled from 'styled-components'
import { Button, Container, Input } from 'components'
import { setFont, getColor } from 'utils'
import { resetFigure, resetImg, resetLink, resetPara } from './common'
import { themes } from 'styles/theme'

const {
  breakpoints: { lg },
} = themes

// 공용으로 사용할 styled-components를 만들어서 사용합니다.

/* OurStory -------------------------------------------- */

export const OusStoryParaCommonStyle = styled.p`
  ${resetPara}

  @media (min-width: ${lg}em) {
    max-width: 100%;
  }
`
OusStoryParaCommonStyle.displayName = 'OusStoryParaCommonStyle'

/* Form Input ------------------------------------------ */

export const FormCommonContainerStyle = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  max-width: 33.9rem;

  @media (min-width: ${lg}em) {
    padding: 3rem;
    max-width: 44rem;
    border-radius: 6px;
    background: rgba(1, 1, 1, 0.6);
  }
`
FormCommonContainerStyle.displayName = 'FormCommonContainerStyle'

export const FormInputHeadCommonStyle = styled.h2`
  ${setFont(2, 1.2, 'bold')}
  margin: 0;
`
FormInputHeadCommonStyle.displayName = 'FormInputHeadCommonStyle'

export const FormInputCommonStyle = styled(Input)`
  margin: 2rem auto 0;
  width: 100%;
  color: ${getColor('lightGray')};

  input {
    border-radius: 5px;
  }
`
FormInputCommonStyle.displayName = 'FormInputCommonStyle'

export const FormCommonButtonStyle = styled(Button)`
  ${setFont(1.6, 1, 'bold')}
  padding: 0.937em;
  margin-top: 3rem;
`
FormCommonButtonStyle.displayName = 'FormCommonButtonStyle'

export const LoginFormTextCommonStyle = styled.span`
  ${setFont(1.2, 1.35, 'normal')}
  color: ${getColor('lightGray')};
  letter-spacing: -0.04em;

  a {
    ${resetLink}
  }
`
LoginFormTextCommonStyle.displayName = 'LoginFormTextCommonStyle'

// 구글 로그인 공용 스타일

export const GoogleCommonFigureStyle = styled.figure`
  ${resetFigure}
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin-top: 2rem;
`
GoogleCommonFigureStyle.displayName = 'GoogleCommonFigureStyle'

export const GoogleCommonImgStyle = styled.img`
  ${resetImg}
`
GoogleCommonImgStyle.displayName = 'GoogleCommonImgStyle'

export const GoogleCommonFigcaptionStyle = styled.figcaption`
  ${setFont(1.2, 1)}
  color: ${getColor('gray')};
  display: grid;
  align-self: flex-end;
  margin-left: 0.4rem;
`
GoogleCommonFigcaptionStyle.displayName = 'GoogleCommonFigcaptionStyle'

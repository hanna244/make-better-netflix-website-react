import styled from 'styled-components'
import { Input } from 'components'
import { setFont, getColor } from 'utils'
import { resetLink, resetPara } from './common'
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

export const LoginFormTextCommonStyle = styled.span`
  ${setFont(1.2, 1.35, 'normal')}
  color: ${getColor('lightGray')};
  letter-spacing: -0.04em;

  a {
    ${resetLink}
  }
`
LoginFormTextCommonStyle.displayName = 'LoginFormTextCommonStyle'

import styled from 'styled-components'
import { Input } from 'components'
import { setFont, getColor } from 'utils'
import { resetLink } from './common'

// 공용으로 사용할 styled-components를 만들어서 사용합니다.

/* LoginForm ------------------------------------------- */

export const FormInputCommonStyle = styled(Input)`
  margin: 2rem auto 0;
  width: 100%;
`

export const LoginFormTextCommonStyle = styled.span`
  ${setFont(1.2, 1.35, 'normal')}
  color: ${getColor('lightGray')};

  a {
    ${resetLink}
  }
`

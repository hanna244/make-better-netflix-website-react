import styled from 'styled-components'
import { getColor } from '../../../../utils'
import { resetLink, resetPara } from '../../../../styles/common'

export const DefinitionStyle = styled.p`
  ${resetPara}
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.4;
  color: ${getColor('gray')};

  a {
    ${resetLink}
  }
`

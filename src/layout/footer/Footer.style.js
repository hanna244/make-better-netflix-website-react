import styled from 'styled-components'
import { resetPara } from '../../styles/common'
import { getColor } from '../../utils'

export const FooterStyle = styled.footer`
  color: ${getColor('gray')};

  p {
    ${resetPara}
    font-weight: bold;
    font-size: 2rem;
    line-height: 1.4;
  }
`

import styled from 'styled-components'
import { resetLink } from '../../../../styles/common'
import { getColor } from '../../../../utils'

export const LinkItemStyle = styled.li`
  display: grid;
  color: ${getColor('gray')};

  a {
    ${resetLink}
  }
`

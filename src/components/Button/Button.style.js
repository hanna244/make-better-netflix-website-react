import styled from 'styled-components'
import { resetButton } from '../../styles/common'
import { getColor } from '../../utils'

export const ButtonStyle = styled.button`
  ${resetButton}
  padding: 0.75em 1.25em;
  border-radius: 4px;
  color: ${getColor('white')};
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.6;
  background: ${getColor('red')};
`

import styled from 'styled-components'
import { resetButton } from '../../styles/common'
import getColor from '../../utils/getColor'

export const LinkButton = styled.button`
  ${resetButton}
  background: ${getColor('red')};
  color: inherit;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.6rem;
  padding: 0.75em 1.25em;
  border-radius: 0.4rem;
`

import styled from 'styled-components'
import { resetButton } from '../../styles/common'
import getColor from '../../utils/getColor'

const AppLinkButton = styled.button`
  ${resetButton}
  background: ${getColor('red')};
  color: ${getColor('white')};
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.6rem;
  padding: 0.75em 1.25em;
  border-radius: 0.4rem;

  &:focus {
    background: ${getColor('vividRed')};
  }
`
export default AppLinkButton

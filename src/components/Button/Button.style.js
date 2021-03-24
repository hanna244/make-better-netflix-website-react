import styled from 'styled-components'
import Button from './Button'
import { resetButton } from '../../styles/common'
import { getColor } from '../../utils'

export const ButtonStyle = styled(Button)`
  ${resetButton}
  padding: 0.75em 1.25em;
  border-radius: 4px;
  color: ${getColor('white')};
  font-weight: bold;
  font-size: 16rem.6rem;
  line-height: 1;
  background: ${({ hover }) =>
    hover ? `${getColor('vividRed')}` : `${getColor('red')}`};

  box-shadow: ${({ focus }) =>
    focus ? `0 0 0 0.3rem ${getColor('focusVisible')}` : null};

  &:hover {
    background: ${getColor('vividRed')};
  }
`
ButtonStyle.displayName = 'ButtonStyle'

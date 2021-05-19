import styled from 'styled-components'
import { resetButton } from 'styles/common'
import { getColor } from 'utils'

export const ButtonStyle = styled.button`
  ${resetButton}
  padding: 0.75em 1.25em;
  border-radius: 4px;
  color: ${getColor('white')};
  font-weight: bold;
  font-size: 16rem.6rem;
  line-height: 1;
  background: ${`${getColor('red')}`};

  box-shadow: ${`0 0 0 0.3rem ${getColor('focusVisible')}`};

  &:hover {
    background: ${getColor('vividRed')};
  }
`
ButtonStyle.displayName = 'ButtonStyle'

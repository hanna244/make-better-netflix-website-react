import styled from 'styled-components'
import { resetButton } from '../../styles/common'
import { getColor } from '../../utils'

export const ButtonStyle = styled.button`
  ${resetButton}
  padding: ${({ size }) => {
    return size === 'medium'
      ? '0.75em 1.25em'
      : size === 'small'
      ? '0.343em 0.468em'
      : '0.75em 1.25em'
  }};
  border-radius: 4px;
  color: ${getColor('white')};
  font-weight: bold;
  font-size: ${({ size }) => {
    return size === 'medium' ? '1.6rem' : size === 'small' ? '1.1rem' : '1.6rem'
  }};
  line-height: ${({ size }) => {
    return size === 'medium' ? '1.6' : size === 'small' ? '1.1' : '1.6'
  }};
  background: ${getColor('red')};

  &:hover {
    background: ${getColor('vividRed')};
  }
`
ButtonStyle.displayName = 'ButtonStyle'

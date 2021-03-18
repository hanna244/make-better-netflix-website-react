import styled from 'styled-components'
import { resetButton } from '../../styles/common'
import { getColor } from '../../utils'

export const ButtonStyle = styled.button`
  ${resetButton}
  padding: ${({ size }) => {
    return size === 'small'
      ? '0.343em 0.468em'
      : size === 'medium'
      ? '0.75em 1.25em'
      : '0.343em 0.468em'
  }};
  border-radius: 4px;
  color: ${getColor('white')};
  font-weight: bold;
  font-size: ${({ size }) => {
    return size === 'small' ? '1.1rem' : size === 'medium' ? '1.6rem' : '1.1rem'
  }};
  line-height: ${({ size }) => {
    return size === 'small' ? '1.1' : size === 'medium' ? '1.6' : '1.1'
  }};
  background: ${getColor('red')};
`

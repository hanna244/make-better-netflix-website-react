import styled from 'styled-components'
import { ButtonStyle } from '../Button/Button.style'

export const LoginButtonStyle = styled(ButtonStyle)`
  display: block;
  max-width: ${({ size }) => {
    return size === 'small'
      ? '33.9rem'
      : size === 'medium'
      ? '38rem'
      : '33.9rem'
  }};
  padding: 0.937em;
  padding: ${({ size }) => {
    return size === 'small'
      ? '0.937em 9.187em'
      : size === 'medium'
      ? '0.937em 10.468em'
      : '0.937em 9.187em'
  }};
  font-size: 1.6rem;
  line-height: 1.6;
`

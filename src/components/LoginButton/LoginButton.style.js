import styled from 'styled-components'
import { ButtonStyle } from '../Button/Button.style'

export const LoginButtonStyle = styled(ButtonStyle)`
  display: block;
  max-width: ${({ size }) => {
    return size === 'medium' ? '38rem' : size === 'small' ? '33.9rem' : '38rem'
  }};
  padding: 0.937em;
  padding: ${({ size }) => {
    return size === 'medium'
      ? '0.937em 10.468em'
      : size === 'small'
      ? '0.937em 9.187em'
      : '0.937em 10.468em'
  }};
  font-size: 1.6rem;
  line-height: 1.6;
`

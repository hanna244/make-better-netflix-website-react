import styled from 'styled-components'
import { Container, Input, PromotionButton } from '../../components'

export const PromotionContainer = styled(Container)`
  padding: 3rem;
`
export const PromotionInput = styled(Input)`
  padding: 0.84em 1.53em;
  width: 23.3rem;

  input {
    border-radius: 50px;
  }
`
PromotionInput.displayName = 'PromotionInput'
export const SignUpButton = styled(PromotionButton)``

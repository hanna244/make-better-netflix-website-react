import styled from 'styled-components'
import { Container, Input, PromotionButton } from '../../components'

export const PromotionContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 60em) {
    flex-direction: row;
  }
`
export const PromotionInput = styled(Input)`
  width: 23.3rem;

  @media (min-width: 60em) {
    width: 54rem;
  }
  /* Input컴포넌트 자식 요소들에 스타일이 먹지 않는다. 오류!  */
  input {
    padding: 0.887em 1.55em;
    border-radius: 50px;
    font-size: 1.3rem;
    line-height: 1.35;

    @media (min-width: 60em) {
      padding: 1.187em 1.25em;
      border-radius: 0;
      font-size: 1.6rem;
      line-height: 1.35;
    }

    &:focus {
      & + label {
        top: 7px;
      }
    }
  }

  label {
    /* absolute 위치 설정  */
    top: 13px;
    font-size: 1.3rem;
    line-height: 1.35;

    @media (min-width: 60em) {
      top: 19px;
      font-size: 1.6rem;
      line-height: 1.35;
    }
  }
`

PromotionInput.displayName = 'PromotionInput'
export const SignUpButton = styled(PromotionButton)`
  padding: 0.75em 1.16em;
  margin-top: 1rem;
  border-radius: 89.7321px;
  font-size: 1.2rem;
  line-height: 1.35;

  @media (min-width: 60em) {
    padding: 0.73em 1.25em;
    margin-top: 0;
    border-radius: 0;
    font-size: 2.2rem;
    line-height: 1.35;
  }

  img {
    width: 1.14rem;
  }
`
SignUpButton.displayName = 'SignUpButton'

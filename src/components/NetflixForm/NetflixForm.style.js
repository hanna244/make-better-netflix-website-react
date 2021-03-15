import styled, { keyframes } from 'styled-components'
import { a11yHidden } from '../../styles/common.js'
import AppContainer from '../AppContainer/AppContainer.style.js'
import { getColor } from '../../utils'

export const FormContainer = styled(AppContainer)`
  position: relative;
  max-width: 33.9rem;
  padding: 0;
  margin: 0 auto;

  &:focus {
    & > label {
      font-size: 1.2rem;
      top: 6px;

      left: 20px;
    }

    & > input {
      padding: 1.387em 1.25em 0.987em;
    }
  }

  @media (min-width: 60em) {
    max-width: 38rem;
  }
`

export const Title = styled.label`
  ${({ a11y }) => (a11y ? a11yHidden : null)};
  position: absolute;
  top: 19px;
  left: 20px;
  font-size: 1.6rem;
  line-height: 1.35;
  color: ${getColor('gray')};
`

export const UserInfo = styled.input`
  width: 100%;
  /* 19/16 = 1.187 */
  /* 20/16 = 1.25 */
  padding: 1.187em 1.25em;

  &:invalid {
    /* background: red; */
  }
`

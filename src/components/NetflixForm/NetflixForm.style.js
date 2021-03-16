import styled, { keyframes } from 'styled-components'
import { a11yHidden } from '../../styles/common.js'
import AppContainer from '../AppContainer/AppContainer.style.js'
import { getColor } from '../../utils'

const focusKeyFrames = keyframes`
  0% {transform: translateY(10px)}
  100% {transform: translateY(0)}
`

export const FormContainer = styled(AppContainer)`
  position: relative;
  max-width: 33.9rem;
  padding: 0;
  margin: 0 auto;
  font-size: 1.6rem;
  line-height: 1.35;

  @media (min-width: 60em) {
    max-width: 38rem;
  }
`

export const Title = styled.label`
  ${({ a11y }) => (a11y ? a11yHidden : null)};
  position: absolute;
  top: 19px;
  left: 20px;
  color: ${getColor('gray')};
`

export const UserInfo = styled.input`
  width: 100%;
  /* 19/16 = 1.187 */
  /* 20/16 = 1.25 */
  padding: 1.187em 1.25em;
  &:focus {
    padding: 1.387em 1.25em 0.987em;
    & + label {
      animation: ${focusKeyFrames} 0.2s ease-out;
      top: 6px;
      left: 20px;
      font-size: 1.2rem;
    }
  }

  &:invalid {
    border: solid ${getColor('red')};
    border-width: 0 0 3px;
    color: ${getColor('red')};
    // 하위 항목중 strong 요소 선택
    & ~ strong[role='alert'] {
      display: block;
    }
  }
`
// 굵은 글씨의 강조의 의미를 나타내기 때문에 strong으로 설정
export const Message = styled.strong`
  display: none;
  margin-left: 1.25em;
  margin-top: 0.5rem;
  font-size: 1.4rem;
  color: ${getColor('red')};
`

import styled from 'styled-components'
import { getColor } from '../../utils'

export const CheckboxWraper = styled.div`
  position: relative;
  .checkbox::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 0;
    width: 1.1rem;
    height: 1.1rem;
    background: url('./assets/checkbox_invalid.svg') no-repeat center / cover;
  }

  .checked::before {
    background: url('./assets/checkbox_valid.svg') no-repeat center / cover;
  }
`

export const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: 1.3rem;
  line-height: 1.35;
  color: ${getColor('lightGray')};
`

export const CheckboxInput = styled.input`
  margin-right: 0.5rem;
  opacity: 0;
`

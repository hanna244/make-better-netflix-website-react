import styled from 'styled-components'
import { getColor } from '../../utils'

export const FormContainer = styled.div`
  position: relative;
  color: ${getColor('gray')};

  .inputInvalid {
    border-bottom: 3px solid ${getColor('red')};
  }
`

export const InputStyle = styled.input`
  max-width: 54rem;
  width: 100%;
  padding: 1.187em 1.25em;
  border: none;
  font-size: 1.6rem;
  line-height: 1.35;

  &:focus {
    padding: 1.587em 1.25em 0.687em;
    & + label {
      top: 10px;
      font-size: 1.2rem;
    }
  }
  &:valid {
    padding: ${({ valid }) => (valid ? '1.587em 1.25em 0.687em' : null)};
    & + label {
      top: ${({ valid }) => (valid ? '10px' : null)};
      font-size: ${({ valid }) => (valid ? '1.2rem' : null)};
    }
  }
  &:invalid {
    padding: ${({ invalid }) => (invalid ? '1.587em 1.25em 0.687em' : null)};
    & + label {
      top: ${({ invalid }) => (invalid ? '10px' : null)};
      font-size: ${({ invalid }) => (invalid ? '1.2rem' : null)};
    }
  }
`

export const LabelStyle = styled.label`
  position: absolute;
  top: 19px;
  left: 20px;
  font-size: 1.6rem;
  line-height: 1.35;
`
export const AlertStyle = styled.span`
  display: block;
  margin-top: 0.5rem;
  margin-left: 2rem;
  font-weight: bold;
  font-size: 1.4rem;
  line-height: 1.35;
  color: ${getColor('red')};
`

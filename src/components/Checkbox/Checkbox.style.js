import styled from 'styled-components'
import { getColor } from '../../utils'

export const CheckboxLabel = styled.label`
  font-size: 1.3rem;
  line-height: 1.35;
  color: ${getColor('lightGray')};
`

export const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`

import styled from 'styled-components'
import { getColor } from '../../utils'

export const SelectStyle = styled.select`
  /* 브라우저 기본 디자인 적용 안 함 */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  padding: 1em 2.12em;
  color: ${getColor('gray')};
  font-size: 1.6rem;
  line-height: 1.2;
  background: url('./assets/select_global.svg') no-repeat left 1rem center,
    url('./assets/select_arrow.svg') no-repeat left 8.7rem top 1.95rem;
`

export const OptionStyle = styled.option``

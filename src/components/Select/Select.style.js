import styled from 'styled-components'
import { a11yHidden } from '../../styles/common'
import { getColor } from '../../utils'

export const LabelStyle = styled.label`
  ${(props) => (props.a11yLabel ? a11yHidden : null)}
`
LabelStyle.displayName = 'LabelStyle'

export const SelectStyle = styled.select`
  /* 브라우저 기본 디자인 적용 안 함 */
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;

  /* padding: (12/16)em (34/16)em  */
  padding: 0.75em 2.12em;
  /* 셀렉트 text 가운데 정렬 */
  text-align-last: center;
  font-size: 1.6rem;
  line-height: 1.2;
  color: ${getColor('gray')};
  background-color: inherit;
  background: url('./assets/select_global.svg') no-repeat left 1rem center,
    url('./assets/select_arrow.svg') no-repeat 8.7rem center;
`
SelectStyle.displayName = 'SelectStyle'

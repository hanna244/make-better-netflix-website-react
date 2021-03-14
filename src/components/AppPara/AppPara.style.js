import styled from 'styled-components'

const AppPara = styled.p`
  font-size: ${({ size }) => size ?? '1rem'};
  font-weight: ${({ weight }) => weight ?? 'normal'};
  line-height: ${({ height }) => height ?? '1.2'};
  color: inherit;
`

export default AppPara

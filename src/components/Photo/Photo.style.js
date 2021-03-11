import styled from 'styled-components'
import { resetImg, rwdImg } from '../../styles/common'

export const Photo = styled.img`
  ${({ rwd }) => (rwd ? rwdImg : resetImg)}
`

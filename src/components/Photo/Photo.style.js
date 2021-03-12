import styled from 'styled-components'
import Photo from './index'
import { resetImg, rwdImg } from '../../styles/common'

export const PhotoStyle = styled(Photo)`
  ${({ rwd }) => (rwd ? rwdImg : resetImg)}
`

import styled from 'styled-components'
import { resetImg } from '../../styles/common'
import { ButtonStyle } from '../Button/Button.style'

export const PromotionButtonStyle = styled(ButtonStyle)`
  padding: 0.9375em 1.25em;
  border-radius: 0;
  font-size: 2.2rem;
  line-height: 1.35;
  letter-spacing: -0.04em;
`

export const Arrow = styled.img`
  ${resetImg}
  width: 2rem;
  margin: 0.435rem 0 0.735rem 1rem;
`

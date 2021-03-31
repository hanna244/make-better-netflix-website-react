import styled from 'styled-components'
import { Background, Container, Promotion } from '../..'
import { setFont } from '../../../utils'

export const ContainerStyle = styled(Container)`
  padding: 2rem 0;
  margin: 0 1.8rem;

  @media (min-width: 60em) {
    padding: 14rem 0;
    margin: 0 auto;
  }
`

export const SectionStyle = styled(Background)`
  margin: 0 auto;
`

export const TitleStyle = styled.h2`
  ${setFont(3, 1.2, 'bold')}
  margin-top: 5rem;

  @media (min-width: 60em) {
    ${setFont(6)}
    margin-top: 8.3rem;
  }
`

export const StrongTextStyle = styled.p`
  ${setFont(1.5, 1.3, 'bold')}
  margin-top: 3rem;

  @media (min-width: 60em) {
    ${setFont(2, 1.2)}
  }
`
export const SignUpStyle = styled.p`
  ${setFont(1.3, 1.35)}
  margin-top: 1rem;

  @media (min-width: 60em) {
    ${setFont(1.6, null, 'bold')}
    margin-top: 2rem;
  }
`
export const PromotionTextStyle = styled.p`
  ${setFont(1.2, 1.35)}

  @media (min-width: 60em) {
    ${setFont(1.6, null, 'bold')}
  }
`

export const OurStoryPromotion = styled(Promotion)``

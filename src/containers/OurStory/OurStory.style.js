import styled from 'styled-components'
import { Container } from 'components'
import Promotion from '../Promotion/Promotion'
import { a11yHidden, resetPara } from 'styles/common'
import { setFont } from 'utils'

// 아워스토리 p 요소 공통 스타일
const CommonPara = styled.p`
  ${resetPara}

  @media (min-width: 60em) {
    max-width: 100%;
  }
`
CommonPara.displayName = 'CommonPara'
export const MainContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 2rem 0;
  margin: 0 1.8rem;
  text-align: center;

  @media (min-width: 60em) {
    padding: 8.3rem 0;
    margin: 0 auto;
  }
`
MainContainer.displayName = 'MainContainer'

export const Head = styled.h2`
  ${a11yHidden}
`
Head.displayName = 'Head'

export const TitleStyle = styled(CommonPara)`
  ${setFont(3, 1.2, 'bold')}
  max-width: 73%;
  margin-top: 5rem;

  @media (min-width: 60em) {
    ${setFont(6)}
    max-width: 100%;
    margin-top: 8.3rem;
  }
`
TitleStyle.displayName = 'TitleStyle'

export const SubTitleStyle = styled(CommonPara)`
  ${setFont(1.5, 1.3, 'bold')}
  max-width: 62%;
  margin-top: 3rem;

  @media (min-width: 60em) {
    ${setFont(2, 1.2)}
  }
`
SubTitleStyle.displayName = 'SubTitleStyle'

export const SignUpStyle = styled(CommonPara)`
  ${setFont(1.3, 1.35)}
  max-width: 24.6rem;
  margin-top: 1rem;

  @media (min-width: 60em) {
    ${setFont(1.6, null, 'bold')}
    max-width: 29.6rem;
    margin-top: 2rem;
  }
`
SignUpStyle.displayName = 'SignUpStyle'

export const PromotionInfoStyle = styled(CommonPara)`
  ${setFont(1.2, 1.35)}
  margin-top: 1.5rem;
  padding-bottom: 5rem;

  @media (min-width: 60em) {
    ${setFont(1.6, null, 'bold')}
    margin-top: 4rem;
    padding-bottom: 4rem;
  }
`
PromotionInfoStyle.displayName = 'PromotionInfoStyle'

export const OurStoryPromotion = styled(Promotion)`
  margin-top: 3rem;
`
OurStoryPromotion.displayName = 'OurStoryPromotion'

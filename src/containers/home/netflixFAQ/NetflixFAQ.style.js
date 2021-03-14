import styled from 'styled-components'
import { AppButton, Photo, AppPara } from '../../../components'

/* FAQ 스타일링 ----------------------------------------------------------------- */

export const FAQHeading = styled.h2`
  margin-top: 6rem;
  text-align: center;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 1.2;

  @media (min-width: 60em) {
    margin-top: 5.4rem;
    font-size: 4.8rem;
  }
`

export const FAQButton = styled(AppButton)`
  position: absolute;
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  background: none;

  @media (min-width: 60em) {
  }
`

export const FAQButtonImage = styled(Photo)`
  position: absolute;
  top: 12px;
  bottom: 12px;
  right: 12px;
  align-self: center;
  width: 0.85rem;
  height: auto;

  @media (min-width: 60em) {
    width: 2.25rem;
    top: 30px;
    bottom: 30px;
    right: 20px;
  }
`

/* FAQ 단락 스타일링 ------------------------------------------------------- */

export const FAQPara = styled(AppPara)`
  max-width: 24.5rem;
  margin: 3rem auto 0;
  text-align: center;
  font-size: 1.3rem;
  line-height: 1.35;

  @media (min-width: 60em) {
    max-width: 100%;
    margin-top: 6rem;
    font-weight: bold;
    font-size: 1.6rem;
  }
`

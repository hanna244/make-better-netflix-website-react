import styled from 'styled-components'
import { AppButton, Photo } from '../../../components'

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

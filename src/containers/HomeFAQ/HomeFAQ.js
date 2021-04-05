import React from 'react'

import {
  Head,
  FAQContainerStyle,
  FAQStyle,
  FAQSignUpStyle,
  FAQPromotionStyle,
} from './HomeFAQ.style'
import data from '../../data/homeContext.json'

const HomeFAQ = () => {
  const promotionText = data[0].ko.signUp

  return (
    <FAQContainerStyle as="section">
      <Head>자주 묻는 질문</Head>
      <FAQStyle />
      <FAQSignUpStyle as="span">{promotionText}</FAQSignUpStyle>
      <FAQPromotionStyle />
    </FAQContainerStyle>
  )
}

export default HomeFAQ

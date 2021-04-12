import React, { useState, useCallback } from 'react'

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

  const [value, setValue] = useState('')

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  return (
    <FAQContainerStyle as="section">
      <Head>자주 묻는 질문</Head>
      <FAQStyle />
      <FAQSignUpStyle as="span">{promotionText}</FAQSignUpStyle>
      <FAQPromotionStyle
        value={value}
        handleChange={handleChange}
        name="email"
        id="FAQEmail"
      />
    </FAQContainerStyle>
  )
}

export default HomeFAQ

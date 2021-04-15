import React, { useState, useCallback } from 'react'
import { isValidEmail } from 'utils'
import data from 'data/homeContext.json'
import {
  Head,
  FAQContainerStyle,
  FAQStyle,
  FAQSignUpStyle,
  FAQPromotionStyle,
} from './HomeFAQ.style'

const HomeFAQ = () => {
  const promotionText = data[0].ko.signUp

  const [value, setValue] = useState('')
  const [detect, setDetect] = useState({
    valid: false,
    invalid: false,
  })

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  const handleDetect = useCallback(() => {
    if (!isValidEmail(value) && value.trim().length === 0) {
      setDetect({
        valid: false,
        invalid: false,
      })
    }
    if (!isValidEmail(value) && value.trim().length !== 0) {
      setDetect({
        valid: false,
        invalid: true,
      })
    }
    if (isValidEmail(value)) {
      setDetect({
        valid: true,
        invalid: false,
      })
    }
  }, [value])

  return (
    <FAQContainerStyle as="section">
      <Head>자주 묻는 질문</Head>
      <FAQStyle />
      <FAQSignUpStyle as="span">{promotionText}</FAQSignUpStyle>
      <FAQPromotionStyle
        value={value}
        handleChange={handleChange}
        handleDetect={handleDetect}
        name="email"
        id="FAQEmail"
        {...detect}
      />
    </FAQContainerStyle>
  )
}

export default HomeFAQ

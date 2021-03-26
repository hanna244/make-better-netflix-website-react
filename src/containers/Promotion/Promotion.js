import React, { useState } from 'react'
import { isValidEmail, passwordRegEx } from '../../utils'
import {
  PromotionContainer,
  PromotionInput,
  SignUpButton,
} from './Promotion.style'

const Promotion = () => {
  // Input 컴포넌트에서 value 값을 가져오기 위해 사용
  const [inputValue, setInputValue] = useState('')
  const [inputAttr, setInputAttr] = useState({})

  const handleInputIsValid = () => {
    if (inputValue.trim().length !== 0) {
      setInputAttr({ valid: `valid="true"` })
    } else {
      setInputAttr({ valid: `valid="false"` })
    }

    if (!passwordRegEx(inputValue)) {
      setInputAttr({ invalid: `invalid="false"` })
    } else {
      setInputAttr({ invalid: `invalid="true"` })
    }
  }

  return (
    <PromotionContainer>
      <PromotionInput
        id="userEmail"
        type="email"
        label="이메일 주소"
        errorMessege="정확한 이메일 주소를 입력하세요."
        onInputComplete={(value) => setInputValue(value)}
        onBlur={handleInputIsValid}
        {...inputAttr}
      />
      <SignUpButton label="30일 무료 이용" />
    </PromotionContainer>
  )
}

export default Promotion

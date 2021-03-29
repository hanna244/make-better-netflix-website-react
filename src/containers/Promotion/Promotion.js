import React, { useState } from 'react'
import { isValidEmail } from '../../utils'
import {
  PromotionContainer,
  PromotionInput,
  SignUpButton,
} from './Promotion.style'

const Promotion = () => {
  // Input 컴포넌트에서 value 값을 가져오기 위해 사용
  const [inputValue, setInputValue] = useState('')
  const [inputAttr, setInputAttr] = useState({})

  // const passwordRegEx = /^[0-9].{8,60}$/
  console.log(isValidEmail(inputValue))

  const handleInputIsValid = () => {
    if (inputValue.trim().length !== 0) {
      setInputAttr({ valid: `valid="true"` })
    } else {
      setInputAttr({ valid: `valid="false"` })
    }
    // 에러 발생. isValidEmail(inputValue)의 결과는 true가 나왔지만 아래 오류가 떠서 invalid="true"가 된다.
    // index.js:1 Warning: Failed prop type: Invalid prop `invalid` of type `string` supplied to `Input`, expected `boolean`.
    if (!isValidEmail(inputValue)) {
      setInputAttr({ invalid: `invalid="true"` })
    } else {
      setInputAttr({ invalid: `invalid="false"` })
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

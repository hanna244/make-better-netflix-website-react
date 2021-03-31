import React, { useState, useCallback } from 'react'
import { isValidEmail } from '../../utils'
import {
  PromotionContainer,
  PromotionInput,
  SignUpButton,
} from './Promotion.style'

const Promotion = ({ className, ...restProps }) => {
  // Input 컴포넌트에서 value 값을 가져오기 위해 사용
  const [inputValue, setInputValue] = useState('')
  const [inputAttr, setInputAttr] = useState({ valid: false, invalid: false })

  // const passwordRegEx = /^[0-9].{8,60}$/
  console.log(isValidEmail(inputValue))

  const checkEmail = useCallback((value) => {
    if (!isValidEmail(value)) {
      setInputAttr({ invalid: true })
    } else {
      setInputAttr({ invalid: false })
    }
  }, [])

  const checkValueLength = useCallback((value) => {
    if (value.trim().length === 0) {
      setInputAttr({ valid: false })
    } else {
      setInputAttr({ valid: true })
    }
  }, [])

  const handleInputIsValid = () => {
    checkValueLength(inputValue)
    checkEmail(inputValue)

    // if (!isValidEmail(inputValue)) {
    //   setInputAttr({ invalid: true })
    // } else {
    //   setInputAttr({ invalid: false })
    // }
    // 에러 발생. isValidEmail(inputValue)의 결과는 true가 나왔지만 아래 오류가 떠서 invalid="true"가 된다.
    // index.js:1 Warning: Failed prop type: Invalid prop `invalid` of type `string` supplied to `Input`, expected `boolean`.
    // if (inputValue.trim().length === 0) {
    //   setInputAttr({ valid: false })
    // } else {
    //   setInputAttr({ valid: true })
    // }
  }

  return (
    <PromotionContainer className={className} {...restProps}>
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

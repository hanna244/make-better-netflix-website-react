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

  const handleInputIsValid = useCallback(() => {
    const valueLength = inputValue.trim().length
    const checkEmail = isValidEmail(inputValue)

    if (!checkEmail && valueLength === 0) {
      setInputAttr({ valid: false, invalid: false })
    } else if (!checkEmail && valueLength !== 0) {
      setInputAttr({ valid: true, invalid: true })
    } else if (checkEmail && valueLength !== 0) {
      setInputAttr({ valid: true, invalid: false })
    }
  }, [inputValue, setInputAttr])

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

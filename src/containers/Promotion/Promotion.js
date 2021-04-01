import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isValidEmail } from '../../utils'
import {
  PromotionContainer,
  PromotionInput,
  SignUpButton,
} from './Promotion.style'

const Promotion = ({ className, ...restProps }) => {
  return (
    <PromotionContainer className={className} {...restProps}>
      <PromotionInput
        id="userEmail"
        type="email"
        label="이메일 주소"
        errorMessege="정확한 이메일 주소를 입력하세요."
        // onInputComplete={(value) => setInputValue(value)}
        // onBlur={handleInputIsValid}
        // {...inputAttr}
      />
      <SignUpButton label="30일 무료 이용" />
    </PromotionContainer>
  )
}

export default Promotion

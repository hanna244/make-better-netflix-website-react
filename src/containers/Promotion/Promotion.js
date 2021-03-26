import React, { Fragment } from 'react'
import { Input, PromotionButton } from '../../components'
import {
  PromotionContainer,
  PromotionInput,
  SignUpButton,
} from './Promotion.style'

const Promotion = () => {
  return (
    <PromotionContainer>
      <PromotionInput
        id="userEmail"
        type="email"
        label="이메일 주소"
        errorMessege="정확한 이메일 주소를 입력하세요."
      />
      <SignUpButton label="30일 무료 이용" />
    </PromotionContainer>
  )
}

export default Promotion

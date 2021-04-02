import React, { useCallback } from 'react'
import {
  PromotionContainer,
  PromotionInput,
  SignUpButton,
} from './Promotion.style'
import { useSelector, useDispatch } from 'react-redux'
import { emailValueUpdate } from '../../store/slices/inputslice'

const Promotion = ({ id, name, className, ...restProps }) => {
  // 스토어에서 상태 가져오기
  const { inputValue } = useSelector(({ formReducer }) => {
    return {
      inputValue: formReducer.email,
    }
  })

  // 스토어에서 액션 가져오기
  const dispatch = useDispatch()

  const updateValue = useCallback(() => dispatch(emailValueUpdate()), [])

  const handleChange = useCallback(
    (e) => {
      updateValue(e.target.value)
    },
    [updateValue]
  )

  return (
    <PromotionContainer className={className}>
      <PromotionInput
        type="email"
        label="이메일 주소"
        name="email"
        id="useEmail"
        errorMessege="정확한 이메일 주소를 입력하세요."
        value={inputValue}
        handleChange={handleChange}
        {...restProps}
      />
      <SignUpButton label="30일 무료 이용" />
    </PromotionContainer>
  )
}

export default Promotion

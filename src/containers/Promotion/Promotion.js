import React from 'react'
import { string } from 'prop-types'
import { useHistory } from 'react-router'
import {
  PromotionContainer,
  PromotionInput,
  SignUpButton,
} from './Promotion.style'

const Promotion = ({
  id,
  name,
  className,
  handleChange,
  handleDetect,
  value,
  valid,
  invalid,
  ...restProps
}) => {
  // 프로모션 버튼 라우터 설정을 위한 history 객체 가져오기
  const history = useHistory()

  return (
    <PromotionContainer className={className}>
      <PromotionInput
        type="email"
        label="이메일 주소"
        errorMessege="정확한 이메일 주소를 입력하세요."
        id={id}
        name={name}
        value={value}
        handleChange={handleChange}
        handleDetect={handleDetect}
        valid={valid}
        invalid={invalid}
        {...restProps}
      />
      <SignUpButton
        label="30일 무료 이용"
        onClick={() => history.push('/signup')}
      />
    </PromotionContainer>
  )
}

Promotion.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
}

export default Promotion

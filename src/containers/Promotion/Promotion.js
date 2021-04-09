import React, { useCallback } from 'react'
import {
  PromotionContainer,
  PromotionInput,
  SignUpButton,
} from './Promotion.style'
import { useSelector, useDispatch } from 'react-redux'
import {
  emailValueUpdate,
  lengthZeroAction,
  invalidAction,
  validAction,
} from '../../store/slices/inputslice'
import { isValidEmail } from '../../utils'
import { string } from 'prop-types'

const Promotion = ({ id, name, className, ...restProps }) => {
  // 스토어에서 상태 가져오기
  const { inputValue, inputValid, inputInvalid } = useSelector(
    ({ userInput }) => {
      return {
        inputValue: userInput.email,
        inputValid: userInput.detect.valid,
        inputInvalid: userInput.detect.invalid,
      }
    }
  )

  // 스토어에서 액션 가져오기
  const dispatch = useDispatch()

  const updateValue = useCallback(
    (value, name) => dispatch(emailValueUpdate(value, name)),
    [dispatch]
  )
  const inputStateLengthZero = useCallback(() => dispatch(lengthZeroAction()), [
    dispatch,
  ])
  // 아래 함수는 자식 컴포넌트에 직접적으로 전달되는 함수는 아니지만 handleChange함수의 종속성 배열에 포함되어 있는 함수이기 때문에 useCallback()을 사용하는 것이 적절하다.
  // 종속성 배열에 포함되어 있으면 왜 useCallback()을 사용해야 할까?
  // 왜냐하면 족송성 배열에 포함되어 있는 모듈이? 변경될 때마다 handleChange 함수는 다시 렌더링 된다.
  // 이때 useCallback을 사용하지 않는다면 해당 함수가 선언되어 있는 컴포넌트가 다시 그려질 떄마다 모듈이 변경되어 handleChange함수가 계속 다시 그려지기 때문이다.
  const inputStateInvalid = useCallback(() => dispatch(invalidAction()), [
    dispatch,
  ])
  const inputStateValid = useCallback(() => dispatch(validAction()), [dispatch])

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value
      const name = e.target.name
      const valueLength = value.trim().length
      const checkEmail = isValidEmail(inputValue)

      updateValue(value, name)

      if (!checkEmail && valueLength === 0) {
        inputStateLengthZero()
      } else if (!checkEmail && valueLength !== 0) {
        inputStateInvalid()
      } else if (checkEmail && valueLength !== 0) {
        inputStateValid()
      }
    },
    [
      updateValue,
      inputStateLengthZero,
      inputStateInvalid,
      inputStateValid,
      inputValue,
    ]
  )

  return (
    <PromotionContainer className={className}>
      <PromotionInput
        type="email"
        label="이메일 주소"
        errorMessege="정확한 이메일 주소를 입력하세요."
        id={id}
        name={name}
        value={inputValue}
        handleChange={handleChange}
        {...restProps}
      />
      <SignUpButton label="30일 무료 이용" />
    </PromotionContainer>
  )
}

Promotion.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
}

export default Promotion

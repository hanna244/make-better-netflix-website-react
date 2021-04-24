import React, { useCallback, useState } from 'react'
import { Input, Button } from 'components'
import { FormInputHeadCommonStyle } from 'styles/customCommon'
import { getPublicAssets, isValidEmail, isValidPassword } from 'utils'

const SignUpForm = () => {
  const [emailValue, setEmailValue] = useState('')
  const [emailHasError, setEmailHasError] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')
  const [passwordHasError, setPasswordHasError] = useState(false)
  const [checkPasswordValue, setCheckPasswordValue] = useState('')
  const [checkPasswordHasError, setCheckPasswordHasError] = useState(false)

  const handleChange = useCallback((e) => {
    let { name, value } = e.target
    value = value.replace(/\s/g, '')

    switch (name) {
      case 'email':
        setEmailValue(value)
        break

      case 'password':
        setPasswordValue(value)
        break

      default:
        throw new Error('`email`과 `password` 인풋 이름만 처리 가능합니다.')
    }
  }, [])

  const handleDetect = useCallback((e) => {
    let { name, value } = e.target
    value = value.trim()

    switch (name) {
      case 'email':
        if (!isValidEmail(value)) {
          setEmailHasError(true)
        } else {
          setEmailHasError(false)
        }
        if (value.trim().length === 0) {
          setEmailHasError(false)
        }
        break

      case 'password':
        if (!isValidPassword(value)) {
          setPasswordHasError(true)
        } else {
          setPasswordHasError(false)
        }
        if (value.trim().length === 0) {
          setPasswordHasError(false)
        }
        break

      default:
        throw new Error('`email`과 `password` 인풋 이름만 처리 가능합니다.')
    }
  }, [])

  return (
    <div>
      <FormInputHeadCommonStyle>회원가입</FormInputHeadCommonStyle>
      <Input
        type="email"
        label="이메일 주소"
        errorMessege="정확한 이메일 주소를 입력하세요."
        name="email"
        id="userEmail"
        value={emailValue}
        handleChange={handleChange}
        handleDetect={handleDetect}
        invalid={emailHasError}
        darkmode
      />
      <Input
        type="password"
        label="비밀번호"
        errorMessege="비밀번호는 4 - 60자 사이이며 숫자를 포함해야 합니다."
        name="password"
        id="userPassword"
        value={passwordValue}
        handleChange={handleChange}
        handleDetect={handleDetect}
        invalid={passwordHasError}
        darkmode
      />
      <Input
        type="password"
        label="비밀번호"
        errorMessege="비밀번호가 일치하지 않습니다."
        name="checkPassword"
        id="checkUserPassword"
        value={checkPasswordValue}
        handleChange={handleChange}
        handleDetect={handleDetect}
        invalid={checkPasswordHasError}
        darkmode
      />
      <Button label="회원가입" />
      <figure>
        <img
          src={`${getPublicAssets('google-logo.svg')}`}
          alt="구글 로고"
          width="16"
          height="16"
        />
        <figcaption>Google로 회원가입</figcaption>
      </figure>
      <figure>
        <img
          src={`${getPublicAssets('github-logo.svg')}`}
          alt="구글 로고"
          width="16"
          height="16"
          style={{ background: '#fff', borderRadius: '50%' }}
        />
        <figcaption>GitHub로 회원가입</figcaption>
      </figure>
    </div>
  )
}

export default SignUpForm

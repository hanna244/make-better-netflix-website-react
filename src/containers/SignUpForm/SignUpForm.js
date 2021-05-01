import React, { useCallback, useState } from 'react'
import {
  FormCommonButtonStyle,
  FormCommonContainerStyle,
  FormInputCommonStyle,
  FormInputHeadCommonStyle,
  SocialCommonButtonStyle,
} from 'styles/customCommon'
import { isValidEmail, isValidPassword } from 'utils'
import {
  signUpWithEmailAndPassword,
  signInWithGoogle,
  signInWithGithub,
} from 'api/netflixBase'

const SignUpForm = ({ handleClick: handleMoveBrowse, ...restProps }) => {
  /* input 유효성 검사 ------------------------------------------------------------- */

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

      case 'checkPassword':
        setCheckPasswordValue(value)
        break

      default:
        throw new Error(
          '`email`과 `password`, `checkPassword` 인풋 이름만 처리 가능합니다.'
        )
    }
  }, [])

  const handleDetect = useCallback(
    (e) => {
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

        case 'checkPassword':
          if (value !== passwordValue) {
            setCheckPasswordHasError(true)
          } else {
            setCheckPasswordHasError(false)
          }
          break

        default:
          throw new Error(
            '`email`과 `password`, `checkPassword` 인풋 이름만 처리 가능합니다.'
          )
      }
    },
    [passwordValue]
  )

  /* 로그인 인증 및 라우터 ------------------------------------------------------------- */

  const handleSubmitAndRoute = useCallback(
    (e) => {
      e.preventDefault()
      // 브라우즈 페이지 라우터
      handleMoveBrowse()
      // 파이어 베이스 인증 이메일 등록
      signUpWithEmailAndPassword(emailValue, checkPasswordValue)
    },
    [checkPasswordValue, emailValue, handleMoveBrowse]
  )

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
  }, [])

  /* 구글, 깃헙 회원가입 ------------------------------------------------------------- */

  const handleSocialAuth = useCallback((e) => {
    let { name } = e.target
    // if (name === 'google') {
    //   signInWithGoogle()
    // }
    if (name === 'github') {
      signInWithGithub()
    }
  }, [])

  return (
    <FormCommonContainerStyle as="form" onSubmit={handleSubmit} {...restProps}>
      <FormInputHeadCommonStyle>회원가입</FormInputHeadCommonStyle>
      <FormInputCommonStyle
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
      <FormInputCommonStyle
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
      <FormInputCommonStyle
        type="password"
        label="비밀번호 확인"
        errorMessege="비밀번호가 일치하지 않습니다."
        name="checkPassword"
        id="checkUserPassword"
        value={checkPasswordValue}
        handleChange={handleChange}
        handleDetect={handleDetect}
        invalid={checkPasswordHasError}
        darkmode
      />
      <FormCommonButtonStyle label="회원가입" onClick={handleSubmitAndRoute} />
      <SocialCommonButtonStyle
        onClick={handleSocialAuth}
        name="google"
        path={'google-logo.svg'}
        hasMarginTop={'2rem'}
      >
        Google로 회원가입
      </SocialCommonButtonStyle>
      <SocialCommonButtonStyle
        onClick={handleSocialAuth}
        name="github"
        path={'github-logo.svg'}
        hasMarginTop={'0.5rem'}
      >
        Github로 회원가입
      </SocialCommonButtonStyle>
    </FormCommonContainerStyle>
  )
}

export default SignUpForm

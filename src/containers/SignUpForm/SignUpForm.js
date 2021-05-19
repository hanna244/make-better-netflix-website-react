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
  socialAuth,
  signInWithGoogle,
  signInWithGithub,
  netflixDatabase,
} from 'api/netflixBase'

const SignUpForm = ({ handleClick: handleMoveBrowse, ...restProps }) => {
  /* input 유효성 검사 ------------------------------------------------------------- */

  const [nameValue, setNameValue] = useState('')
  const [nameHasError, setNameHasError] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [emailHasError, setEmailHasError] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')
  const [passwordHasError, setPasswordHasError] = useState(false)
  const [checkPasswordValue, setCheckPasswordValue] = useState('')
  const [checkPasswordHasError, setCheckPasswordHasError] = useState(false)

  const handleChange = useCallback((e) => {
    let { name, value } = e.target
    // 띄어쓰기 및 빈문자열 공백 없는 문자열('')로 변경
    value = value.replace(/\s/g, '')

    switch (name) {
      case 'name':
        setNameValue(value)
        break

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
          '`name`과 `email`, `password`, `checkPassword` 인풋 이름만 처리 가능합니다.'
        )
    }
  }, [])

  const handleDetect = useCallback(
    (e) => {
      let { name, value } = e.target
      value = value.trim()

      switch (name) {
        case 'name':
          if (nameValue.trim().length === 0) {
            setNameHasError(true)
          } else {
            setNameHasError(false)
          }
          break

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
    [nameValue, passwordValue]
  )

  /* 파이어베이스 인증, 데이터베이스 및 라우터 ------------------------------------------------------------- */

  // form submit 시 페이지 새로고침 되지 않도록 설정
  const handleSubmit = useCallback((e) => {
    e.preventDefault()
  }, [])

  /* 인증, 라우터 ------------- */

  // 이메일, 패스워드

  const authAndRoute = useCallback(async () => {
    // 브라우즈 페이지 라우터
    await handleMoveBrowse()
    // 파이어 베이스 인증 이메일 등록
    await signUpWithEmailAndPassword(emailValue, checkPasswordValue)
  }, [checkPasswordValue, emailValue, handleMoveBrowse])

  // 구글, 깃헙

  const handleSocialAuth = useCallback((e) => {
    let { name } = e.target

    if (name === 'google') {
      signInWithGoogle()
    }
    if (name === 'github') {
      signInWithGithub()
    }
  }, [])

  // const handleSocialAuth = useCallback((e) => {
  //   let { name } = e.target
  //   socialAuth(name)
  // }, [])

  /* 데이터 베이스 ------------- */

  const submitDataBase = useCallback(async () => {
    try {
      await netflixDatabase.collection('user').add({
        name: nameValue,
        email: emailValue,
      })
      console.log('데이터 베이스에 데이터 전송 성공')
    } catch {
      console.log('데이터 베이스에 데이터 전송 실패')
    }
  }, [emailValue, nameValue])

  const handleAuthAndSunmit = useCallback(
    (e) => {
      e.preventDefault()
      authAndRoute()
      submitDataBase()
    },
    [authAndRoute, submitDataBase]
  )

  return (
    <FormCommonContainerStyle as="form" onSubmit={handleSubmit} {...restProps}>
      <FormInputHeadCommonStyle>회원가입</FormInputHeadCommonStyle>
      <FormInputCommonStyle
        type="text"
        label="이름"
        errorMessege="이름은 필수 입력 값입니다."
        name="name"
        id="userName"
        value={nameValue}
        handleChange={handleChange}
        handleDetect={handleDetect}
        invalid={nameHasError}
        darkmode
      />
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
      <FormCommonButtonStyle
        type="submit"
        label="회원가입"
        onClick={handleAuthAndSunmit}
      />
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

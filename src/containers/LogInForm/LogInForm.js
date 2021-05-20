import React, { useCallback, useState } from 'react'
import { Checkbox } from 'components'
import { isValidEmail, isValidPassword } from 'utils'
import {
  logInWithEmailAndPassword,
  socialAuth,
  netflixAuth,
} from 'api/netflixBase'
import {
  LogInEmailInputStyle,
  HelpButtonStyle,
  RememberAndHelpContainerStyle,
  CheckEmailStyle,
  GoogleCaptchaStyle,
} from './LogInForm.style'
import {
  FormInputHeadCommonStyle,
  FormInputCommonStyle as PasswordInputStyle,
  FormCommonContainerStyle,
  FormCommonButtonStyle,
  SocialCommonButtonStyle,
} from 'styles/customCommon'

const LogInForm = ({
  headingLevel,
  handleClick: handleMoveBrowse,
  ...restProps
}) => {
  /* input 상태 관리 및 유효성 검사 ----------------------------------------------------- */
  const [emailValue, setEmailValue] = useState('')
  const [emailHasError, setEmailHasError] = useState(false)
  const [passwordValue, setPasswordValue] = useState('')
  const [passwordHasError, setPasswordHasError] = useState(false)
  const [checked, setChecked] = useState(false)

  // input의 value에 값이 없을 때 버튼은 비활성화 된다.
  const isInvalidButton = emailValue === '' || passwordValue === ''

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

  /* 체크 박스 -------------------------------------------------------------------- */

  const handleChecked = useCallback(() => {
    setChecked(!checked)
  }, [checked])

  /* 로그인 인증 및 라우터 ------------------------------------------------------------- */

  const handleSubmit = useCallback((e) => {
    e.preventDefault()
  }, [])

  // 이메일 패스워드

  const handleAuthAndRoute = useCallback(
    async (e) => {
      e.preventDefault()

      await logInWithEmailAndPassword(emailValue, passwordValue)

      if (netflixAuth.currentUser) {
        handleMoveBrowse()
      }
    },
    [handleMoveBrowse, emailValue, passwordValue]
  )

  // 소셜

  const handleSocialAuth = useCallback((e) => {
    let { name } = e.target
    socialAuth(name)
  }, [])

  return (
    <FormCommonContainerStyle as="form" onSubmit={handleSubmit} {...restProps}>
      <FormInputHeadCommonStyle as={headingLevel}>
        로그인
      </FormInputHeadCommonStyle>
      <LogInEmailInputStyle
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
      <PasswordInputStyle
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
      <FormCommonButtonStyle
        disable={isInvalidButton}
        onClick={handleAuthAndRoute}
      />
      <RememberAndHelpContainerStyle>
        <Checkbox
          onClick={handleChecked}
          checked={checked}
          label="로그인 정보 저장"
        />
        <HelpButtonStyle type="button">도움이 필요하신가요?</HelpButtonStyle>
      </RememberAndHelpContainerStyle>
      <SocialCommonButtonStyle
        onClick={handleSocialAuth}
        name="google"
        path={'google-logo.svg'}
        hasMarginTop={'2rem'}
      >
        Google로 로그인
      </SocialCommonButtonStyle>
      <SocialCommonButtonStyle
        onClick={handleSocialAuth}
        name="google"
        path={'github-logo.svg'}
        hasMarginTop={'0.5rem'}
      >
        Github로 로그인
      </SocialCommonButtonStyle>
      <CheckEmailStyle>
        Netflix 회원이 아닌가요? <a href="signup">지금 가입하세요.</a>
      </CheckEmailStyle>
      <GoogleCaptchaStyle>
        이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
        확인합니다. <a href="/">자세히 알아보기</a>
      </GoogleCaptchaStyle>
    </FormCommonContainerStyle>
  )
}

export default LogInForm

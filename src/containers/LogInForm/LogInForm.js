import React, { useCallback, memo, useState } from 'react'
import { Checkbox } from 'components'
import { isValidEmail, isValidPassword, getPublicAssets } from 'utils'
import {
  LogInContainerStyle,
  LoginHeadStyle,
  EmailInputStyle,
  PasswordInputStyle,
  LogInButtonStyle,
  HelpButtonStyle,
  RememberAndHelpContainerStyle,
  GoogleFigureStyle,
  GoogleImgStyle,
  GoogleFigcaptionStyle,
  CheckEmailStyle,
  GoogleCaptchaStyle,
} from './LogInForm.style'

const initInputState = {
  email: '',
  emailDetect: {
    valid: false,
    invalid: false,
  },
  password: '',
  passwordDetect: {
    valid: false,
    invalid: false,
  },
}
const MemoEmailInputStyle = memo(EmailInputStyle)
const MemoPasswordInputStyle = memo(PasswordInputStyle)

const LogInForm = ({ headingLevel, handleClick, ...restProps }) => {
  const [inputState, setInputState] = useState(initInputState)

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setInputState({ ...inputState, [name]: value })
    },
    [inputState]
  )

  const handleDetect = useCallback(
    (e) => {
      const { name, value } = e.target
      console.log({ ...inputState })
      console.log(value)

      switch (name) {
        case 'email':
          if (!isValidEmail(value) && value.trim().length === 0) {
            setInputState({
              ...inputState,
              email: value,
              emailDetect: { valid: false, invalid: false },
            })
          }
          if (!isValidEmail(value) && value.trim().length !== 0) {
            setInputState({
              ...inputState,
              email: value,
              emailDetect: { valid: false, invalid: true },
            })
          }
          if (isValidEmail(value)) {
            setInputState({
              ...inputState,
              email: value,
              emailDetect: { valid: true, invalid: false },
            })
          }
          break

        case 'password':
          if (!isValidPassword(value) && value.trim().length !== 0) {
            setInputState({
              ...inputState,
              password: value,
              passwordDetect: { valid: false, invalid: true },
            })
          }
          if (isValidPassword(value) && value.trim().length !== 0) {
            setInputState({
              ...inputState,
              password: value,
              passwordDetect: { valid: true, invalid: false },
            })
          }
          if (!isValidPassword(value) && value.trim().length === 0) {
            setInputState({
              ...inputState,
              password: value,
              passwordDetect: { valid: false, invalid: false },
            })
          }
          break

        default:
          setInputState(initInputState)
      }
    },
    [inputState]
  )

  return (
    <LogInContainerStyle {...restProps}>
      <LoginHeadStyle as={headingLevel}>로그인</LoginHeadStyle>
      <MemoEmailInputStyle
        type="email"
        label="이메일 주소 또는 폰 번호"
        errorMessege="정확한 이메일 주소를 입력하세요."
        name="email"
        id="userEmail"
        value={inputState.email}
        handleChange={handleChange}
        handleDetect={handleDetect}
        darkmode
        {...inputState.emailDetect}
      />
      <MemoPasswordInputStyle
        type="password"
        label="비밀번호"
        errorMessege="비밀번호는 4 - 60자 사이이며 숫자를 포함해야 합니다."
        name="password"
        id="userPassword"
        value={inputState.password}
        handleChange={handleChange}
        handleDetect={handleDetect}
        darkmode
        {...inputState.passwordDetect}
      />
      <LogInButtonStyle onClick={handleClick} />
      <RememberAndHelpContainerStyle>
        <Checkbox label="로그인 정보 저장" checked />
        <HelpButtonStyle type="button">도움이 필요하신가요?</HelpButtonStyle>
      </RememberAndHelpContainerStyle>

      <GoogleFigureStyle>
        <GoogleImgStyle
          src={`${getPublicAssets('google-logo.svg')}`}
          alt="구글 로고"
          width="16"
          height="16"
        />
        <GoogleFigcaptionStyle>Google로 로그인</GoogleFigcaptionStyle>
      </GoogleFigureStyle>
      <CheckEmailStyle>
        Netflix 회원이 아닌가요? <a href="signup">지금 가입하세요.</a>
      </CheckEmailStyle>
      <GoogleCaptchaStyle>
        이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
        확인합니다. <a href="/">자세히 알아보기</a>
      </GoogleCaptchaStyle>
    </LogInContainerStyle>
  )
}

export default LogInForm

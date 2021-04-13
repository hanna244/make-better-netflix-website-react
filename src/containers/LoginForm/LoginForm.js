import React, { useState } from 'react'
import { Checkbox } from '../../components'
import { isValidEmail, isValidPassword } from '../../utils'
import {
  LogInContainer,
  Head,
  EmailInput,
  PasswordInput,
  LogInButton,
  HelpButton,
  RememberAndHelpContainer,
  GoogleFigure,
  GoogleImg,
  GoogleFigcaption,
  CheckEmail,
  GoogleCaptcha,
} from './LogInForm.style'

const LogInForm = ({ headingLevel, handleClick, ...restProps }) => {
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

  // console.log(initInputState.passwordDetect)
  const [inputState, setInputState] = useState(initInputState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputState({ [name]: value.trim() })
  }

  const handleDetect = (e) => {
    const { name, value } = e.target
    console.log(name)

    switch (name) {
      case 'email':
        if (!isValidEmail(value) && value.trim().length === 0) {
          setInputState({
            emailDetect: { valid: false, invalid: false },
          })
        }
        if (!isValidEmail(value) && value.trim().length !== 0) {
          setInputState({
            emailDetect: { valid: false, invalid: true },
          })
        }
        if (isValidEmail(value)) {
          setInputState({
            emailDetect: { valid: true, invalid: false },
          })
        }
        break

      case 'password':
        console.log(isValidPassword(value))
        if (!isValidPassword(value) && value.trim().length !== 0) {
          setInputState({
            passowordDetect: { valid: false, invalid: true },
          })
        }
        if (isValidPassword(value) && value.trim().length !== 0) {
          setInputState({
            passowordDetect: { valid: true, invalid: false },
          })
        }

        if (!isValidPassword(value) && value.trim().length === 0) {
          setInputState({
            passowordDetect: { valid: false, invalid: false },
          })
        }

        break

      default:
        setInputState(initInputState)
    }
  }

  return (
    <LogInContainer {...restProps}>
      <Head as={headingLevel}>로그인</Head>
      <EmailInput
        type="email"
        label="이메일 주소 또는 폰 번호"
        errorMessege="정확한 이메일 주소 또는 폰 번호를 입력하세요."
        name="email"
        id="userEmail"
        handleChange={handleChange}
        handleDetect={handleDetect}
        darkmode
        {...inputState.emailDetect}
      />
      <PasswordInput
        type="password"
        label="비밀번호"
        errorMessege="비밀번호는 4 - 60자 사이의 숫자여야 합니다."
        name="password"
        id="userPassword"
        handleChange={handleChange}
        handleDetect={handleDetect}
        darkmode
        {...inputState.passwordDetect}
      />
      <LogInButton onClick={handleClick} />
      <RememberAndHelpContainer>
        <Checkbox label="로그인 정보 저장" checked />
        <HelpButton type="button">도움이 필요하신가요?</HelpButton>
      </RememberAndHelpContainer>

      <GoogleFigure>
        <GoogleImg
          src="./assets/facebook-logo.svg"
          alt="구글 로고"
          width="16"
          height="16"
        />
        <GoogleFigcaption>Google로 로그인</GoogleFigcaption>
      </GoogleFigure>
      <CheckEmail>
        Netflix 회원이 아닌가요? <a href="signup">지금 가입하세요.</a>
      </CheckEmail>
      <GoogleCaptcha>
        이 페이지는 Google reCAPTCHA의 보호를 받아 사용자가 로봇이 아님을
        확인합니다. <a href="/">자세히 알아보기</a>
      </GoogleCaptcha>
    </LogInContainer>
  )
}

export default LogInForm

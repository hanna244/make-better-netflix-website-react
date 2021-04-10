import React from 'react'
import { Checkbox } from '../../components'

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

const LogInForm = ({ headingLevel, ...restProps }) => {
  return (
    <LogInContainer {...restProps}>
      <Head as={headingLevel}>로그인</Head>
      <EmailInput
        type="email"
        label="이메일 주소 또는 폰 번호"
        name="userEmail"
        darkmode
      />
      <PasswordInput
        type="email"
        label="비밀번호"
        errorMessege="비밀번호는 4 - 60자 사이여야 합니다."
        name="userPassword"
        darkmode
      />
      <LogInButton />
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

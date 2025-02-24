import styled from 'styled-components'
import { Background, Button, Container, Input } from 'components'
import { setFont, getColor, getPublicAssets } from 'utils'
import { resetButton, resetLink, resetList, resetPara } from './common'
import { themes } from 'styles/theme'

const {
  breakpoints: { lg },
} = themes

/* OurStory ----------------------------------------------------------------- */

export const OusStoryParaCommonStyle = styled.p`
  ${resetPara}

  @media (min-width: ${lg}em) {
    max-width: 100%;
  }
`
OusStoryParaCommonStyle.displayName = 'OusStoryParaCommonStyle'

/* login, signup 페이지 공용 스타일 ------------------------------------------------- */

// 컨테이너 스타일

export const LogInCommonBackgroundStyle = styled(Background)`
  display: flex;
  justify-content: center;
  padding: 6.6rem 0 79.3rem;
  background: #111;

  @media (min-width: ${lg}em) {
    // login, signup 배경 이미지를 다르게 하기 위해 src 속성 전달 받음
    background: ${({ dim, path }) =>
      dim
        ? `linear-gradient( 180deg,#000000 5.68%,rgba(0,0,0,0.3) 42.95%,rgba(0,0,0,0.8) 79.3% ),url(/assets/Cover.jpg) center/cover no-repeat`
        : `url(${getPublicAssets(path)}) center/cover no-repeat`};
  }

  @media (min-width: ${lg}em) {
    padding: 16rem 0 76.3rem;
  }
`

LogInCommonBackgroundStyle.displayName = 'LogInCommonBackgroundStyle'

// input 스타일

export const FormCommonContainerStyle = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  min-width: 33.9rem;

  @media (min-width: ${lg}em) {
    padding: 3rem;
    max-width: 44rem;
    border-radius: 6px;
    background: rgba(1, 1, 1, 0.6);
  }
`
FormCommonContainerStyle.displayName = 'FormCommonContainerStyle'

export const FormInputHeadCommonStyle = styled.h2`
  ${setFont(2, 1.2, 'bold')}
  margin: 0;
`
FormInputHeadCommonStyle.displayName = 'FormInputHeadCommonStyle'

export const FormInputCommonStyle = styled(Input)`
  margin: 2rem auto 0;
  width: 100%;
  color: ${getColor('lightGray')};

  input {
    border-radius: 5px;
    // 크롬에서 input 옵션 선택 시 input의 배경 색상 변하는 오류 해결 customCommon.js 참고
    -webkit-text-fill-color: ${({ darkmode }) =>
      `${getColor(darkmode ? 'white' : 'black')}`};
  }
`
FormInputCommonStyle.displayName = 'FormInputCommonStyle'

export const FormCommonButtonStyle = styled(Button)`
  ${setFont(1.6, 1, 'bold')}
  padding: 0.937em;
  margin-top: 3rem;
`
FormCommonButtonStyle.displayName = 'FormCommonButtonStyle'

export const LoginFormTextCommonStyle = styled.span`
  ${setFont(1.2, 1.35, 'normal')}
  color: ${getColor('lightGray')};
  letter-spacing: -0.04em;

  a {
    ${resetLink}
  }
`
LoginFormTextCommonStyle.displayName = 'LoginFormTextCommonStyle'

// 구글 로그인 공용 스타일

export const SocialCommonButtonStyle = styled.button`
  ${resetButton}
  ${setFont(1.2, 1)}
  color: ${getColor('gray')};
  margin-top: ${({ hasMarginTop }) => `${hasMarginTop}`};
  width: 11rem;
  background: none;
  line-height: 1.5;
  padding: 0;

  &::before {
    content: '';
    background: ${({ path }) =>
      `url(${getPublicAssets(path)}) center/73% no-repeat`};
    width: 16px;
    height: 15px;
    float: left;
  }

  &::after {
    content: '';
    display: block;
    clear: both;
  }
`
SocialCommonButtonStyle.displayName = 'SocialCommonButtonStyle'

/* NavHeader ---------------------------------------------------------------- */

/* 네브 해더 공용 버튼 스타일 */
export const CommonNavButtonStyle = styled.button`
  ${resetButton}
  background: inherit;
  padding: 0;

  &::before {
    content: '';
    display: inline-block;
  }

  &::after {
    content: '';
    display: inline-block;
  }
`
CommonNavButtonStyle.displayName = 'CommonNavButtonStyle'

export const DropdownCommonListStyle = styled.div`
  position: absolute;

  &::before {
    content: '';
    position: absolute;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid ${getColor('white')};
  }

  @media (min-width: ${lg}em) {
    &::before {
      content: none;
    }
  }
`
DropdownCommonListStyle.displayName = 'DropdownCommonListStyle'

/* Profile ------------------------------------------------------------------ */

export const DropdownCommonButtonStyle = styled.button`
  ${resetButton}
  background: inherit;
  color: ${getColor('white')};
`
DropdownCommonButtonStyle.displayName = 'DropdownCommonButtonStyle'

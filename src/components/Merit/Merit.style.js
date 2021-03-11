import styled from 'styled-components'
import {
import { IntroVideo } from './Merit.style'
  resetHeading,
  resetPara,
  resetFigure,
  rwdImg,
  rwdVideo,
} from '../../styles/common'

export const Inner = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0 1.8rem;
  // 공간 스타일 top 뱡향으로 주는 것으로 통일
  padding: 2rem 0;

  @media (min-width: 60em) {
    flex-direction: ${(props) => props.direction ?? 'row'};
    justify-content: space-between;
  }
`
// text와 미디어 요소에 임의의 크기를 주지 않고 자연스럽게 글자의 떨어짐이나 비디오의 크기가 설정될 수 있도록 %로 크기 설정
export const Wrapper = styled.div`
  text-align: left;
  width: 100%;

  @media (min-width: 60em) {
    width: 50%;
  }
`
export const Title = styled.h3`
  ${resetHeading}
  margin-top: 6rem;
  font-weight: bold;
  font-size: 2.4rem;
  line-height: 1.2;

  @media (min-width: 60em) {
    margin-top: 8.3rem;
    font-size: 4.8rem;
  }
`
export const SubTitle = styled.p`
  ${resetPara}
  display: grid;
  justify-self: center;
  margin-top: 3rem;
  font-size: 1.6rem;
  line-height: 1.5;

  @media (min-width: 60em) {
    // 본문 내용이 제목의 너비를 넘어가는 것을 방지하기 위해
    width: 80%;
    margin-top: 2rem;
    margin-top: 8.3rem;
    font-size: 2.6rem;
  }
`

// 스타일 확장 사용하기
// https://styled-components.com/docs/basics#extending-styles
// Wrapper 컴포넌트를 사용하려고 했으나 미디어래퍼는 별로도 position을 사용해야 하기 때문에 스타일 확장하여 사용
export const MediaWrapper = styled(Wrapper)`
  ${resetFigure}
  position: relative;
  max-width: 34rem;
`

export const IntroImage = styled.img`
  ${rwdImg}
  /* position: absolute; */
  margin-top: 1rem;
  max-width: 34rem;

  @media (min-width: 60em) {
    width: 48rem;
  }
`
export const IntroVideo = styled.video`
  /* ${rwdVideo} */
  position: absolute;
  z-index: -100;
  /* 251 / 340 * 100% */
  width: 73.823%;
  top: 23.529%;
  left: 12.941%;
`

// 식 적용이 안된다.
/* width: ${(props) => cals(props.width / 340 * 100%)}; */

export const IntroVideo2 = styled(IntroVideo)`
`
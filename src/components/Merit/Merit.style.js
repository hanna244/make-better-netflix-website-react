import styled from 'styled-components'
import { resetHeading, resetPara, rwdImg, rwdVideo } from '../../styles/common'

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

export const IntroImage = styled.img`
  ${rwdImg}
  margin-top: 1rem;
  width: 33.8rem;

  @media (min-width: 60em) {
    width: 48rem;
  }
`
export const IntroVideo = styled.video`
  ${rwdVideo}
`

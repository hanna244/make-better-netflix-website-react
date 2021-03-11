import React from 'react'
import {
  Inner,
  Title,
  Wrapper,
  SubTitle,
  IntroImage,
  IntroVideo,
} from './Merit.style'

const Merit = ({ children, direction = 'row', ...restProps }) => {
  return (
    <Inner {...restProps} direction={direction}>
      {children}
    </Inner>
  )
}

Merit.Container = function ({ children, ...restProps }) {
  return <section {...restProps}>{children}</section>
}
// Tag Name 변경 가능하도록 as 속성 설정
Merit.Wrapper = function ({ className, children, as, ...restProps }) {
  return (
    // as 속성의 별칭을 사용해서 적용했으나 styled-component의 스타일 적용 변수 이름과 달라서 스타일 적용이 안된다.
    // styled-component에서 불러오는 이름은 Wrapper이다.
    // 2차 커밋 : as속성을 리턴 되는 리액트 요소에 적용하지 않았으나 렌더링 시 props로 전달한 as 속성의 tagName 적용 된다.
    // react 공식 문서에 as 속성이 어딧을까?
    <Wrapper className={className} {...restProps}>
      {children}
    </Wrapper>
  )
}
Merit.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Merit.SubTitle = function ({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Merit.IntroImage = function ({ children, ...restProps }) {
  return <IntroImage {...restProps}>{children}</IntroImage>
}
// forwardRef((props, ref) => {})
Merit.IntroVideo = React.forwardRef(({ children, ...restProps }, ref) => {
  return (
    // <video /> autoPlay 적용시 카멜케이스 사용
    <IntroVideo ref={ref} autoPlay loop muted {...restProps}>
      {children}
    </IntroVideo>
  )
})

export default Merit

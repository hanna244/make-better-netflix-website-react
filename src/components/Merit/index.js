import React from 'react'
import {
  Inner,
  Wrapper,
  Title,
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
  Merit.Container.displayName = 'hanna'
  return <section {...restProps}>{children}</section>
}
Merit.Wrapper = function ({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
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

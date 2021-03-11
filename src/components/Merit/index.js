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
Merit.Wrapper = function ({
  className,
  children,
  as: CostomWrapperTagName,
  ...restProps
}) {
  return (
    <CostomWrapperTagName className={className} {...restProps}>
      {children}
    </CostomWrapperTagName>
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

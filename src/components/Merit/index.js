import React from 'react'
import {
  Inner,
  TextWrapper,
  Title,
  SubTitle,
  MediaWrapper,
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
Merit.TextWrapper = function ({ children, ...restProps }) {
  return <TextWrapper {...restProps}>{children}</TextWrapper>
}
Merit.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}
Merit.SubTitle = function ({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Merit.MediaWrapper = function ({ children, ...restProps }) {
  return <MediaWrapper {...restProps}>{children}</MediaWrapper>
}
Merit.IntroImage = function ({ children, ...restProps }) {
  return <IntroImage {...restProps}>{children}</IntroImage>
}
Merit.IntroVideo = function ({ children, ...restProps }) {
  return <IntroVideo {...restProps}>{children}</IntroVideo>
}

export default Merit

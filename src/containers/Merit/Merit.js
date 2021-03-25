import { oneOf, string } from 'prop-types'
import React from 'react'
import {
  Container,
  Head,
  imageType,
  Description,
  MediaWrapper,
  MeritFrame,
  MeritVideo,
} from './Merit.style'

const Merit = ({ heading, headingLevel, description, image, video, alt }) => {
  return (
    <Container>
      <Head as={headingLevel}>{heading}</Head>
      <Description>{description}</Description>
      <MediaWrapper>
        <MeritFrame type={imageType} alt={alt} />
        <MeritVideo src={video} autoPlay muted loop></MeritVideo>
      </MediaWrapper>
    </Container>
  )
}

Merit.propTypes = {
  /** 사용자 정의 제목을 설정할 수 있습니다. */
  heading: string,
  /** 제목 요소의 레벨을 설정할 수 있습니다. 제목의 레벨은 순서에 맞게 설정해야 합니다. */
  headingLevel: oneOf[('h1', 'h2', 'h3', 'h4', 'h5', 'h6')],
  /** 사용자 정의 본문의 내용을 설정할 수 있습니다. */
  description: string,
  /** 이미지의 타입을 설정할 수 있습니다. */
  imageType: oneOf(['device', 'download', 'tv']),
  /** 비디오 주소를 설정할 수 있습니다. */
  video: string,
  /** 이미지의 대체 텍스트를 설정합니다. */
  alt: string,
}

export default Merit

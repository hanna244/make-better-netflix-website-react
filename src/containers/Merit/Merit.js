import { oneOf, string } from 'prop-types'
import React from 'react'
import { Frame } from '../../components'
import {
  Container,
  Head,
  Description,
  MediaWrapper,
  MeritVideo,
  TextContainer,
  DownloadStyle,
} from './Merit.style'

const Merit = ({
  heading,
  headingLevel,
  description,
  imageType,
  videoType,
  alt,
  direction,
  classNames,
  downloadContent,
}) => {
  return (
    <Container direction={direction}>
      <TextContainer className={classNames}>
        <Head as={headingLevel}>{heading}</Head>
        <Description>{description}</Description>
      </TextContainer>
      <MediaWrapper className={classNames}>
        <Frame type={imageType} alt={alt} />
        <MeritVideo type={videoType}></MeritVideo>
        {downloadContent ? <DownloadStyle /> : null}
      </MediaWrapper>
    </Container>
  )
}

Merit.defaultProps = {
  direction: 'row',
  className: 'tv',
  downloadContent: false,
}

Merit.propTypes = {
  /** 사용자 정의 제목을 설정할 수 있습니다. */
  heading: string,
  /** 제목 요소의 레벨을 설정할 수 있습니다. 제목의 레벨은 순서에 맞게 설정해야 합니다. */
  // headingLevel: oneOf[('h1', 'h2', 'h3', 'h4', 'h5', 'h6')],
  headingLevel: string.isRequired,
  /** 사용자 정의 본문의 내용을 설정할 수 있습니다. */
  description: string,
  /** 사용자 정의 이미지를 설정할 수 있습니다. */
  imageType: string,
  /** 사용자 정의 비디오를 설정할 수 있습니다. */
  videoType: string,
  /** 이미지의 대체 텍스트를 설정합니다. */
  alt: string,
  /** 데스크탑 버전에서 컨텐츠의 정렬 방향을 전환할 수 있습니다. */
  direction: oneOf(['row', 'row-reverse']),
}

export default Merit

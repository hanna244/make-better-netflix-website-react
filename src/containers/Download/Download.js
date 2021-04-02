import React from 'react'
import {
  ContainerStyle,
  TextContainerStyle,
  PosterStyle,
  StoryText,
  SaveText,
  DownloadStyle,
} from './Download.style'

const Download = ({ className, ...restProps }) => {
  return (
    <ContainerStyle className={className}>
      <PosterStyle
        src="./assets/poster_stranger_things.jpg"
        alt="영화 포스터"
        width="30"
        height="43"
      />
      <TextContainerStyle>
        <StoryText>기묘한 이야기</StoryText>
        <SaveText>저장 중...</SaveText>
      </TextContainerStyle>
      <DownloadStyle
        src="./assets/download-icon.gif"
        alt="다운로드 아이콘"
        width="33"
        height="33"
      />
    </ContainerStyle>
  )
}

export default Download

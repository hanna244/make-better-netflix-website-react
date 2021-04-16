import { bool, oneOf } from 'prop-types'
import { VideoStyle } from './InnerVideo.style'
import React, { useEffect, useRef } from 'react'
import { getPublicAssets } from 'utils'

const InnerVideo = ({ type = 'tv', isMuted = true, ...restProps }) => {
  const { tv, device, noVideo } = InnerVideo.Video
  const videoRef = useRef(null)

  useEffect(() => {
    isMuted && (videoRef.current.muted = true)
  })

  let src = ''
  switch (type) {
    case 'tv':
      src = tv
      break
    case 'device':
      src = device
      break
    case 'noVideo':
      src = noVideo
      break

    default:
      throw new Error('찾으시는 컨텐츠는 없습니다.')
  }

  return (
    <VideoStyle
      ref={videoRef}
      src={src}
      autoPlay
      loop
      {...restProps}
    ></VideoStyle>
  )
}

InnerVideo.Video = {
  tv: `${getPublicAssets('video-tv-0819.m4v')}`,
  device: `${getPublicAssets('video-devices.m4v')}`,
  noVideo: '',
}

InnerVideo.propTypes = {
  /** 비디오의 타입을 선택할 수 있습니다. */
  type: oneOf(['tv', 'device', 'noVideo']),
  /** video 요소의 muted 속성을 추가/제거 할 수 있습니다. */
  isMuted: bool,
}

export default InnerVideo

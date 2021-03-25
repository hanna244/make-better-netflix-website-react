import React, { useEffect, useRef } from 'react'

const InnerVideo = ({ type, isMuted, videoSettingOn = true, ...restProps }) => {
  const { tv, device } = InnerVideo.Video
  const videoRef = useRef(null)

  useEffect(() => {
    isMuted && (videoRef.current.muted = true)
    // console.log(videoRef.current.muted) → true
    // 이 코드는 왜 오류인지 모르겠다.
    // isMuted ? (videoRef.current.muted = true) : null
  })

  let src = ''
  switch (type) {
    case 'tv':
      src = tv
      break
    case 'device':
      src = device
      break

    default:
      throw new Error('찾으시는 컨텐츠는 없습니다.')
  }

  return <video ref={videoRef} src={src} autoPlay loop {...restProps}></video>
}

InnerVideo.Video = {
  tv: './assets/video-tv-0819.m4v',
  device: './assets/video-devices.m4v',
}

export default InnerVideo

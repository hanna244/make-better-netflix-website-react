import React from 'react'

const InnerVideo = ({ type, videoSettingOn = true, ...restProps }) => {
  const { tv, device } = InnerVideo.Video

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

  // 현재 muted 속성이 적용이 안된다. 해결방법은?
  return <video src={src} autoPlay muted loop {...restProps}></video>
}

InnerVideo.Video = {
  tv: './assets/video-tv-0819.m4v',
  device: './assets/video-devices.m4v',
}

export default InnerVideo

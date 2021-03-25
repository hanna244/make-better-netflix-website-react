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

  // 문자열을 요소의 속성으로 넣는 방법?
  // autoPlay muted loop 속성을 조건 처리 하는 방법?
  // const setting = ({ videoSetting }) =>
  //   videoSetting ? 'autoPlay muted loop' : null

  return <video src={src} autoPlay muted loop {...restProps}></video>
}

InnerVideo.Video = {
  tv: './assets/video-tv-0819.m4v',
  device: './assets/video-devices.m4v',
}

export default InnerVideo

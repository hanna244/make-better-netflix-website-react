import React from 'react'
import { FrameImage } from './Frame.style'
import { oneOf, string } from 'prop-types'

const Frame = ({ alt = '', type = 'device', ...restProps }) => {
  const { device, download, tv } = Frame.Image

  let src = ''
  switch (type) {
    case 'device':
      src = device
      break
    case 'download':
      src = download
      break
    case 'tv':
      src = tv
      break

    default:
      throw new Error('지원하는 이미지가 아닙니다.')
  }
  return <FrameImage src={src} alt={alt} {...restProps} />
}

// 전역이 오염되는 것을 방지하기 위해 컴파운드 방식 사용
Frame.Image = {
  device: './assets/category=Device.png',
  download: './assets/category=Download.jpg',
  tv: './assets/category=TV.png',
}

Frame.propTypes = {
  /** 이미지의 타입을 선택할 수 있습니다. */
  type: oneOf(['device', 'download', 'tv']),
  /** 프레임 대체 텍스트는 스크린 리더 사용자에게 읽힐 콘텐츠입니다. 프레임과 동등한 정보를 제공해야 합니다. */
  alt: string,
}

export default Frame

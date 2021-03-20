import React from 'react'
import { oneOf } from 'prop-types'

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
  return <img src={src} alt={alt} {...restProps} />
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
}

export default Frame

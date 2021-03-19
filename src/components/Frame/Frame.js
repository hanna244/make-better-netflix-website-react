import React from 'react'
import { oneOf } from 'prop-types'

const { device, download, tv } = {
  device: './assets/category=Device.png',
  download: './assets/category=Download.jpg',
  tv: './assets/category=TV.png',
}

const Frame = ({ alt = '', type = 'device', ...restProps }) => {
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

Frame.propTypes = {
  /** 이미지의 타입을 선택할 수 있습니다. */
  type: oneOf(['device', 'download', 'tv']),
}

export default Frame

import React from 'react'
import device from './image/category=Device.png'
import download from './image/category=Download.png'
import tv from './image/category=TV.png'

const Frame = ({ alt = '', type, ...restProps }) => {
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

export default Frame

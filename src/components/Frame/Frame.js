import React from 'react'

const Frame = ({ alt = '', type, ...restProps }) => {
  let src = ''
  switch (type) {
    case 'device':
      src = './image/category=Device.png'
      break
    case 'download':
      src = './image/category=Download.png'
      break
    case tv:
      src = './image/category=TV.png'
      break

    default:
      throw new Error('지원하는 이미지가 아닙니다.')
  }
  return <img src={src} alt={alt} {...restProps} />
}

export default Frame

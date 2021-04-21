import React from 'react'
import { ContainerStyle } from './Container.style'
import { node } from 'prop-types'

const Container = ({ className, children, ...restProps }) => {
  return (
    <ContainerStyle className={className} {...restProps}>
      {children}
    </ContainerStyle>
  )
}

Container.defaultProps = {
  children: '컨텐츠를 넣어주세요',
}

Container.propTypes = {
  /** 사용자 정의 컨텐츠를 설정할 수 있습니다. */
  children: node,
}

export default Container

import React from 'react'
import { ContainerStyle } from './Container.style'

const Container = ({
  paddingVertical,
  marginHorizon,
  children,
  ...restProps
}) => {
  return <ContainerStyle {...restProps}>{children}</ContainerStyle>
}

Container.defaultProps = {
  children: '컨텐츠를 넣어주세요',
}

export default Container

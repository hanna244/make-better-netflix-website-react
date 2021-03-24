import React from 'react'
import { ContainerStyle } from './Container.style'
// import Logo from '../Logo/Logo'

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
  // dufaultProps에 설정한 Logo 컴포넌트는 왜 문자열로 표시되나요?
  // children: <Logo width="350" />,
}

export default Container

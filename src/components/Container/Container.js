import React from 'react'
import { ContainerStyle } from './Container.style'
// import Logo from '../Logo/Logo'

const Container = ({
  paddingVertical,
  marginHorizon,
  align,
  style,
  children,
  ...restProps
}) => {
  const styles = {
    textAlign: align,
    ...style,
  }

  return (
    <ContainerStyle
      style={styles}
      marginHorizon={marginHorizon}
      paddingVertical={paddingVertical}
      {...restProps}
    >
      {children}
    </ContainerStyle>
  )
}

Container.defaultProps = {
  children: '컨텐츠를 넣어주세요',
  // children: <Logo width="350" />,
}

export default Container

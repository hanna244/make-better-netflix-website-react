import React from 'react'
import { ContainerStyle } from './Container.style'
// import Logo from '../Logo/Logo'
import { object, oneOf, string } from 'prop-types'

const Container = ({ align, style, children, ...restProps }) => {
  const styles = {
    textAlign: align,
    ...style,
  }

  return (
    <ContainerStyle style={styles} {...restProps}>
      {children}
    </ContainerStyle>
  )
}

Container.defaultProps = {
  children: '컨텐츠를 넣어주세요',

  // children: <Logo width="350" />,
}

Container.propTypes = {
  /** 컨텐츠 정렬을 설정 할 수 있습니다. */
  align: oneOf(['center', 'left', 'right']),
  /** 사용자 정의 스타일을 객체 타입으로 설정할 수 있습니다. */
  style: object,
  /** 내부 컨텐츠를 설정할 수 있습니다. */
  children: string,
}

export default Container

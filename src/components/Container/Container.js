import React from 'react'
import { ContainerStyle } from './Container.style'
import { object, oneOf } from 'prop-types'

const Container = ({ align, style, ...restProps }) => {
  const styles = {
    textAlign: align,
    ...style,
  }

  return <ContainerStyle style={styles} {...restProps} />
}

Container.defaultProps = {
  children: '컨텐츠를 넣어주세요',
}

Container.propTypes = {
  /** 컨텐츠 정렬을 설정 할 수 있습니다. */
  align: oneOf(['center', 'left', 'right']),
  /** 사용자 정의 스타일을 객체 타입으로 설정할 수 있습니다. */
  style: object,
}

export default Container

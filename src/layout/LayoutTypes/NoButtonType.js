import React from 'react'
import { DefaultHeader } from '../Header'
import Footer from '../Footer/Footer'
import styled from 'styled-components'

const NoButtonType = ({ children, ...restProps }) => {
  return (
    <>
      <DefaultHeader {...restProps} />
      <main>{children}</main>
      <NoButtonTypeFooterStyle />
    </>
  )
}

const NoButtonTypeFooterStyle = styled(Footer)`
  position: absolute;
  bottom: -27%;
  left: 0;
  right: 0;
  padding: 1rem;
  background: rgba(1, 1, 1, 0.5);
  max-width: 133rem;

  address {
    padding-bottom: 4rem;
  }
`

export default NoButtonType

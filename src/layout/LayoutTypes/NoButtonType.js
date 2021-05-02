import React from 'react'
import { DefaultHeader } from '../Header'
import Footer from '../Footer/Footer'
import styled from 'styled-components'

const NoButtonType = ({ children, ...restProps }) => {
  return (
    <NoButtonTypeRelativeStyle>
      <DefaultHeader {...restProps} />
      <main>{children}</main>
      <NoButtonTypeFooterStyle onTypeFooterStyle />
    </NoButtonTypeRelativeStyle>
  )
}

const NoButtonTypeRelativeStyle = styled.div`
  position: relative;
`

const NoButtonTypeFooterStyle = styled(Footer)`
  position: absolute;
  bottom: 0;
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

import React from 'react'
import { DefaultHeader } from '../Header'
import Footer from '../Footer/Footer'

const LogInType = ({ children, ...restProps }) => {
  return (
    <>
      <DefaultHeader {...restProps} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LogInType

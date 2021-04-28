import React from 'react'
import { DefaultHeader } from '../Header'
import Footer from '../Footer/Footer'

const DefualtType = ({ children, ...restProps }) => {
  return (
    <>
      <DefaultHeader hasLogInButton {...restProps} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefualtType

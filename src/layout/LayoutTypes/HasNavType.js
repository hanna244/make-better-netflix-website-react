import React from 'react'
import { NavHeader } from '../Header'
import Footer from '../Footer/Footer'

const HasNavType = ({ children, ...restProps }) => {
  return (
    <>
      <NavHeader {...restProps} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default HasNavType

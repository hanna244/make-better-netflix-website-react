import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const LogInType = ({ children, ...restProps }) => {
  return (
    <>
      <Header {...restProps} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LogInType

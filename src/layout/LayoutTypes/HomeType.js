import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Defualt = ({ children, ...restProps }) => {
  return (
    <>
      <Header hasLogInButton {...restProps} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Defualt

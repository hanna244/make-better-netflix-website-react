import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export const Defualt = ({ children, ...restProps }) => {
  return (
    <>
      <Header {...restProps} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

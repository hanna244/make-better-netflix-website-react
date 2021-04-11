import React from 'react'
import BrowseHeader from '../Header/BrowseHeader'
import Footer from '../Footer/Footer'

const BrowseType = ({ children, ...restProps }) => {
  return (
    <>
      <BrowseHeader {...restProps} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default BrowseType

import React, { useState, Fragment } from 'react'
import { Accordion } from '../../components'
import { Promotion } from '../index'
import { A11yHead } from './FAQ.style'

const FAQ = ({ as, label, children, ...restProps }) => {
  const [isVisible, setIsvisible] = useState(false)

  const handleOpen = () => {
    setIsvisible(!isVisible)
  }

  return (
    <Fragment>
      <article {...restProps}>
        {children}
        <A11yHead as={as}>{label}</A11yHead>
        <Accordion handleOpen={handleOpen} isVisible={isVisible} />
      </article>
    </Fragment>
  )
}

export default FAQ

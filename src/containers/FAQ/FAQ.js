import React, { useState } from 'react'
import { Accordion } from '../../components'
import { A11yHead } from './FAQ.style'

const FAQ = ({
  heddingProps: { as, label, ...props },
  children,
  ...restProps
}) => {
  const [isVisible, setIsvisible] = useState(false)

  const handleOpen = () => {
    setIsvisible(!isVisible)
  }

  return (
    <article {...restProps}>
      {children}
      <A11yHead as={as} {...props}>
        {label}
      </A11yHead>
      <Accordion handleOpen={handleOpen} isVisible={isVisible} />
    </article>
  )
}

export default FAQ

import React, { useState } from 'react'
import { Accordion } from '../../components'

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
      <h3 as={as} {...props}>
        {label}
      </h3>
      <Accordion handleOpen={handleOpen} isVisible={isVisible} />
    </article>
  )
}

export default FAQ

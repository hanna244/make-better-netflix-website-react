import React, { useContext, useState } from 'react'

import { AccordionContext } from '../../context/Accordion'
import { Wrapper, Item, Head, Body } from './Accordion.style'

const Accordion = function Accordion({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [answerShow, setAnswerShow] = useState(false)

  const changeShow = () => {
    setAnswerShow(!answerShow)
  }
  const changeClose = () => {
    setAnswerShow(false)
  }

  return (
    <AccordionContext.Provider value={{ answerShow, changeShow, changeClose }}>
      <Item {...restProps}>{children}</Item>
    </AccordionContext.Provider>
  )
}
Accordion.Head = function AccordionHead({ children, ...restProps }) {
  const context = useContext(AccordionContext)
  const { changeShow, changeClose } = context
  return (
    <Head onClick={changeShow} onBlur={changeClose} {...restProps}>
      {children}
    </Head>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const context = useContext(AccordionContext)
  const { answerShow } = context

  return answerShow ? <Body {...restProps}>{children}</Body> : null
}

export default Accordion

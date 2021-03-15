import React, { useContext, useState } from 'react'
import { Transition } from 'react-transition-group'
import './trans.sass'
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

  return (
    <AccordionContext.Provider value={{ answerShow, changeShow }}>
      <Item {...restProps}>{children}</Item>
    </AccordionContext.Provider>
  )
}
Accordion.Head = function AccordionHead({ children, ...restProps }) {
  const context = useContext(AccordionContext)
  const { changeShow } = context
  return (
    <Head onClick={changeShow} {...restProps}>
      {children}
    </Head>
  )
}
Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const context = useContext(AccordionContext)
  const { answerShow } = context

  return answerShow ? (
    <Transition timeout={300} in={true}>
      {(state) => (
        <Body classNames={state} {...restProps}>
          {children}
        </Body>
      )}
    </Transition>
  ) : null
}

export default Accordion

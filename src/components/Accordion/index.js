import React from 'react'
import { Wrapper, Item, Head, Body } from './Accordion.style'

const Accordion = function Accordion({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}
Accordion.Head = function AccordionHead({ children, ...restProps }) {
  return <Head {...restProps}>{children}</Head>
}
Accordion.Body = function AccordionBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>
}

export default Accordion

import React from 'react'
import { Wrapper, Item, Head, Body } from './Accordion.style'

const Accordion = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>
}
Accordion.Item = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>
}
Accordion.Head = ({ children, ...restProps }) => {
  return <Head {...restProps}>{children}</Head>
}
Accordion.Body = ({ children, ...restProps }) => {
  return <Body {...restProps}>{children}</Body>
}

export default Accordion

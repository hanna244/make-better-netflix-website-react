import React from 'react'
import { displayName } from '../../utils'
import { Wrapper, Item, Head, Body } from './Accordion.style'

// const AccordionWrapper = ({ children }) => {
//   AccordionWrapper.displayName = `AccordionWrapper`
//   return children
// }

// const Accordion = ({ children, ...restProps }) => {
//   Accordion.displayName = `${displayName(Accordion)}`
//   AccordionWrapper = (props) => <AccordionWrapper {...props} />
//   React.children.map(props.children, (child, index) => {
//     console.log(child.type.displayName)
//   })
//   return React.cloneElement(child)
// }

const Accordion = ({ children, ...restProps }) => {
  Accordion.displayName = `${displayName(Accordion)}`
  return <Wrapper {...restProps}>{children}</Wrapper>
}

Accordion.Item = ({ children, ...restProps }) => {
  Accordion.Item.displayName = `${displayName(Accordion.Item)}`
  return <Item {...restProps}>{children}</Item>
}
Accordion.Head = ({ children, ...restProps }) => {
  return <Head {...restProps}>{children}</Head>
}
Accordion.Body = ({ children, ...restProps }) => {
  return <Body {...restProps}>{children}</Body>
}

export default Accordion

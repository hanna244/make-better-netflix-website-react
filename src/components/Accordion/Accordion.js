import React from 'react'
import { Item, Head, Body } from './Accordion.style'

const Accordion = ({ question, answer, ...restProps }) => {
  return (
    <ul {...restProps}>
      <Item>
        <Head>{question}</Head>
        <Body>
          <p>{answer[0] ?? null}</p>
          <p>{answer[1] ?? null}</p>
        </Body>
      </Item>
    </ul>
  )
}

export default Accordion

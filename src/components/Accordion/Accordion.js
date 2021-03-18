import React from 'react'
import { Item, Head, Body } from './Accordion.style'
import { v4 as uuid } from 'uuid'

const Accordion = ({
  id,
  question,
  showAnswer = false,
  answer,
  ...restProps
}) => {
  return (
    <Item key={uuid()} id={uuid()} {...restProps}>
      <Head>{question}</Head>
      {showAnswer ? (
        <Body>
          <p>{answer[0] ?? null}</p>
          <p>{answer[1] ?? null}</p>
        </Body>
      ) : null}
    </Item>
  )
}

export default Accordion

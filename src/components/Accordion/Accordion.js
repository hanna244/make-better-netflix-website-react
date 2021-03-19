import React from 'react'
import { Item, Head, Body, OpenButton, plusImg } from './Accordion.style'
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
      <Head>
        {question}
        <OpenButton>
          <plusImg width="50" src="./assets/plusIcon.svg" alt="답변 보기" />
        </OpenButton>
      </Head>
      {showAnswer ? (
        <Body as="dd">
          <p>{answer[0] ?? null}</p>
          <p>{answer[1] ?? null}</p>
        </Body>
      ) : null}
    </Item>
  )
}

export default Accordion

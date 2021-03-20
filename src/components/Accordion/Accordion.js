import React from 'react'
import { string, bool } from 'prop-types'
import { Item, Head, Body, OpenButton, PlusImg } from './Accordion.style'
import { v4 as uuid } from 'uuid'

const Accordion = ({
  question,
  showAnswer = false,
  answer,
  open = false,
  ...restProps
}) => {
  return (
    <Item key={uuid()} id={uuid()} {...restProps}>
      <Head>
        {question}
        <OpenButton>
          <PlusImg
            width="40"
            height="40"
            src="./assets/plusIcon.svg"
            alt="답변 보기"
            open={open}
          />
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

Accordion.propTypes = {
  question: string,
  showAnswer: bool,
  answer: string,
  open: bool,
}

export default Accordion

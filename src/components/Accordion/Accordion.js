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
          {answer
            ? answer.map((item) => {
                return <p>{item}</p>
              })
            : null}
        </Body>
      ) : null}
    </Item>
  )
}

Accordion.defaultProps = {
  question: '이곳에 질문을 입력하세요.',
  answer: ['이곳에 답변을 입력하세요.'],
}

Accordion.propTypes = {
  question: string,
  showAnswer: bool,
  answer: string,
  open: bool,
}

export default Accordion

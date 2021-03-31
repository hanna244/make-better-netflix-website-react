import React, { useRef } from 'react'
import { string, bool } from 'prop-types'
import { Item, Head, Body, OpenButton, PlusImg } from './Accordion.style'
import { v4 as uuid } from 'uuid'
import { useTransition, animated } from 'react-spring'

const Accordion = ({
  isVisible,
  handleOpen,
  question,
  isOpen,
  answer,
  ...restProps
}) => {
  return (
    <Item key={uuid()} id={uuid()} onClick={handleOpen} {...restProps}>
      <Head>
        {question}
        <OpenButton>
          <PlusImg
            width="40"
            height="40"
            src="./assets/plusIcon.svg"
            alt="답변 보기"
            isOpen={isOpen}
          />
        </OpenButton>
      </Head>
      <div>
        {isOpen ? (
          <Body as="dd">
            {answer
              ? answer.map((item) => {
                  return <p>{item}</p>
                })
              : null}
          </Body>
        ) : null}
      </div>
    </Item>
  )
}

Accordion.defaultProps = {
  question: '이곳에 질문을 입력하세요.',
  answer: ['이곳에 답변을 입력하세요.'],
}

Accordion.propTypes = {
  /** 아코디언 메뉴의 헤더에 사용자 정의 질문을 설정할 수 있습니다. */
  question: string,
  /** 아코디언 메뉴의 바디(답변)을 열고/닫기 설정할 수 있습니다. */
  isOpen: bool,
  /** 아코디언 메뉴의 바디에 사용자 정의 답변을 설정할 수 있습니다. */
  answer: string,
}

export default Accordion

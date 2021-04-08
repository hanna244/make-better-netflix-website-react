import React from 'react'
import { string, any } from 'prop-types'
import { Item, Head, Body, OpenButton, PlusImg } from './Accordion.style'
import { v4 as uuid } from 'uuid'
import { motion, AnimatePresence } from 'framer-motion'

const Accordion = ({
  id,
  isVisible,
  question,
  answer,
  handleToggle,
  currentIndex,
  isOpen,
  ...restProps
}) => {
  return (
    <Item key={uuid()} className="accordionItem" {...restProps}>
      <Head>
        {question}
        <OpenButton>
          <PlusImg
            width="40"
            height="40"
            src="./assets/plusIcon.svg"
            alt="답변 보기"
          />
        </OpenButton>
      </Head>
      <AnimatePresence>
        {isOpen && currentIndex === id ? (
          // <Body animate={{ y: 100 }} as={motion.dd}>
          <Body
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{
              type: 'tween',
              // 애니메이션 지연시간
              duration: 0.3,
            }}
            as={motion.dd}
          >
            {answer.map((item) => {
              return (
                <p key={uuid()} id={uuid()}>
                  {item}
                </p>
              )
            })}
          </Body>
        ) : null}
      </AnimatePresence>
    </Item>
  )
}

Accordion.defaultProps = {
  question: '이곳에 질문을 입력하세요.',
  answer: [],
}

Accordion.propTypes = {
  /** 아코디언 메뉴의 헤더에 사용자 정의 질문을 설정할 수 있습니다. */
  question: string,
  /** 아코디언 메뉴의 바디에 사용자 정의 답변을 설정할 수 있습니다. */
  answer: any,
}

export default Accordion

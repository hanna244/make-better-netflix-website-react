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
      {/* 컴포넌트가 제거될 때 애니메이션을 적용할 수 있다. 
      하지만 index 값에 대한 조건 처리가 되어 있기 때문에 해당 제거 될 때 어떻게 애니메이션을 적용해야 할지 모르겠음 */}
      <AnimatePresence>
        {isOpen && currentIndex === id && (
          <Body
            as={motion.dd}
            // 애니메이션의 기본 요소 스타일
            initial={{ height: 0 }}
            // 애니메이션이 적용 되었을 때 요소의 스타일
            animate={{ height: 'auto' }}
            // 애니메이션이 끝날 때 요소의 스타일
            exit={{ height: 0 }}
            // 애니메이션 트렌지션
            transition={{
              // spring 처럼 통통 거리지 않는다.
              // spring으로도 탄성을 제어할 수 있없는가?
              // tween보다 spring이 더 이후에 나온 최신 속성이다.
              type: 'tween',
              // 애니메이션 지연시간
              duration: 0.3,
            }}
          >
            {answer.map((item) => {
              return (
                <p key={uuid()} id={uuid()}>
                  {item}
                </p>
              )
            })}
          </Body>
        )}
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

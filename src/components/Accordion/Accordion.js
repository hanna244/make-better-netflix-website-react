import React from 'react'
import { string, any } from 'prop-types'
import { Item, Head, Body, OpenButton, PlusImg } from './Accordion.style'
import { motion, AnimatePresence } from 'framer-motion'
import { getPublicAssets } from 'utils'

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
    <Item className="accordionItem" {...restProps}>
      <Head>
        {question}
        <OpenButton>
          <PlusImg
            width="40"
            height="40"
            src={`${getPublicAssets('plusIcon.svg')}`}
            alt="답변 보기"
          />
        </OpenButton>
      </Head>
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
              type: 'spring',
              // 애니메이션 지연시간
              duration: 0.3,
            }}
          >
            {answer.map((item, index) => {
              return (
                <p
                  key={`Accordion_Body_${index}`}
                  id={`Accordion_Body_${index}`}
                >
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
  question: '',
  answer: [],
}

Accordion.propTypes = {
  /** 아코디언 메뉴의 헤더에 사용자 정의 질문을 설정할 수 있습니다. */
  question: string,
  /** 아코디언 메뉴의 바디에 사용자 정의 답변을 설정할 수 있습니다. */
  answer: any,
}

export default Accordion

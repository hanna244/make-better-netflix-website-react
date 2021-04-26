import React, { Fragment } from 'react'
import { array } from 'prop-types'
import { Item, Head, Body, OpenButton, PlusImg } from './Accordion.style'
import { motion, AnimatePresence } from 'framer-motion'
import { getPublicAssets } from 'utils'

const Accordion = ({
  data,
  handleClick,
  currentIndex,
  isOpen,
  ...restProps
}) => {
  console.log(currentIndex)
  return (
    <Fragment>
      {data.map((item, index) => (
        <Accordion.Item
          question={item.question}
          answer={item.answer}
          key={`Accordion_${index}`}
          id={`Accordion_${index}`}
          handleClick={handleClick}
          index={index}
          currentIndex={currentIndex}
          isOpen={isOpen}
          {...restProps}
        />
      ))}
    </Fragment>
  )
}

Accordion.defaultProps = {
  data: [],
}
Accordion.propTypes = {
  data: array,
}
Accordion.Item = function AccordionItem({
  handleClick,
  question,
  answer,
  isOpen,
  index,
  currentIndex,
  ...restProps
}) {
  return (
    <Item onClick={handleClick}>
      <Accordion.Head {...restProps} children={question} />
      <Accordion.Body
        index={index}
        currentIndex={currentIndex}
        children={answer}
        isOpen={isOpen}
      />
    </Item>
  )
}
Accordion.Head = function AccordionHead({ children, index, ...restProps }) {
  return (
    <Head>
      {children}
      <OpenButton data-index={index}>
        <PlusImg
          width="40"
          height="40"
          src={`${getPublicAssets('plusIcon.svg')}`}
          alt="답변 보기"
        />
      </OpenButton>
    </Head>
  )
}
Accordion.Body = function AccordionBody({
  index,
  currentIndex,
  children,
  isOpen,
  ...restProps
}) {
  // console.log(index)
  // console.log(currentIndex)
  return (
    <AnimatePresence>
      {isOpen && index === currentIndex && (
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
          {...restProps}
        >
          {children.map((item, index) => {
            return (
              <p key={`Accordion_Body_${index}`} id={`Accordion_Body_${index}`}>
                {item}
              </p>
            )
          })}
        </Body>
      )}
    </AnimatePresence>
  )
}

export default Accordion

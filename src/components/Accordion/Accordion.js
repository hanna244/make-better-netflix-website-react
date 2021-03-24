import React, { useRef } from 'react'
// import { string, bool } from 'prop-types'
import { Item, Head, Body, OpenButton, PlusImg } from './Accordion.style'
import { v4 as uuid } from 'uuid'
import { useTransition, animated } from 'react-spring'

const getElementStyle = (ref) => {
  return ref.current ? ref.current.getBoundingClientRect().height : 0
}

const Accordion = ({
  isVisible,
  handleOpen,
  question,
  isOpen,
  answer,
  ...restProps
}) => {
  const { visibleStyle, hiddenStyle } = Accordion
  const bodyRef = useRef(null)
  const transition = useTransition(isVisible, null, {
    enter: () => async (next, cancel) => {
      const height = getElementStyle(bodyRef)

      await next({ height, opacity: 1, overflow: 'visible' })
      await next(visibleStyle)
    },
    leave: () => async (next, cancel) => {
      const height = getElementStyle(bodyRef)

      await next({ height, opacity: 0 })
      await next(hiddenStyle)
    },

    from: isVisible ? visibleStyle : hiddenStyle,
  })

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
      {transition.map(({ item: show, key, prop }) => {
        return show ? (
          <animated.div>
            <Body style={prop} key={key} as="dd">
              {answer
                ? answer.map((item) => {
                    return <p>{item}</p>
                  })
                : null}
            </Body>
          </animated.div>
        ) : null
      })}
    </Item>
  )
}

Accordion.defaultProps = {
  question: '이곳에 질문을 입력하세요.',
  answer: ['이곳에 답변을 입력하세요.'],
}

Accordion.visibleStyle = { height: 'auto', opacity: 1, overflow: 'visible' }
Accordion.hiddenStyle = { height: 'auto', opacity: 1, overflow: 'visible' }

export default Accordion

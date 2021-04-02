import React, { useRef, useState } from 'react'
import { string, bool, any } from 'prop-types'
import { Item, Head, Body, OpenButton, PlusImg } from './Accordion.style'
import { v4 as uuid } from 'uuid'
import { useTransition, animated } from 'react-spring'

const Accordion = ({
  isVisible,
  handleOpen,
  question,
  isOpen,
  answer = [],
  ...restProps
}) => {
  // const bodyRef = useRef(null)

  // const [toggle, setToggle] = useState(false)
  // const transitions = useTransition(toggle, null, {
  //   from: { transform: 'translateY(-307px)' },
  //   enter: { transform: 'translateY(0px)' },
  //   leave: { transform: 'translateY(-307px)' },
  // })

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
            {answer.map((item) => {
              return (
                <p key={uuid()} id={uuid()}>
                  {item}
                </p>
              )
            })}
          </Body>
        ) : null}

        {/* {transitions.map(({ item, props, key }) => (
          // 현재 애니메이션이 동작되지 않음으로 uuid()를 설정해서 오류 해결 (임시)
          <animated.div key={uuid()} id={uuid()} style={props}>
            <Body ref={bodyRef} as="dd">
              {answer.map((item) => {
                return <p>{item}</p>
              })}
            </Body>
          </animated.div>
        ))} */}
      </div>
    </Item>
  )
}

// return transitions.map(({ item, props, key }) =>
// <animated.div key={key} style={props}>{item.text}</animated.div>
// )

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
  answer: any,
}

export default Accordion

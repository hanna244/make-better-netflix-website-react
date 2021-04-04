import React, { useEffect, useCallback, useState, Fragment } from 'react'
import { v4 as uuid } from 'uuid'
import { Accordion } from '../../components'

import { useSelector, useDispatch } from 'react-redux'
import { currentNumber, accordionIsOpen } from '../../store/slices/faqslice'

import { List } from './FAQ.style'

const FAQ = ({ as, label, children, ...restProps }) => {
  // 데이터 비동기 통신으로 받아오기
  const [faqData, setFaqData] = useState([])
  const fetchData = useCallback(() => {
    import('../../data/faq.json')
      .then((data) => {
        const { default: _default } = data
        setFaqData(_default)
      })
      .catch((error) => console.error('데이터를 받아오는데 실패했습니다.'))
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  // 스토어에서 상태 가져오기
  const { currentIndex, isOpen } = useSelector((state) => {
    return {
      currentIndex: state.curious.currentIndex,
      isOpen: state.curious.isOpen,
    }
  })
  // dispatch를 통해 액션 실행
  const dispatch = useDispatch()
  const changeIndex = (index) => dispatch(currentNumber(index))
  const changeOpenState = () => dispatch(accordionIsOpen())

  const handleAccordionStateandIndex = (index) => {
    changeOpenState()
    changeIndex(index === currentIndex ? 0 : index)
  }

  return (
    <Fragment>
      <List {...restProps}>
        {faqData.map((item, index) => (
          <Accordion
            key={uuid()}
            id={index}
            question={item.question}
            answer={item.answer}
            onClick={() => handleAccordionStateandIndex(index)}
            currentIndex={currentIndex}
            isOpen={isOpen}
          />
        ))}
      </List>
    </Fragment>
  )
}

export default FAQ
